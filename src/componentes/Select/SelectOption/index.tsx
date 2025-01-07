import React from "react";

interface SelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  label: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  label,
  ...props
}) => {
  return (
    <option value={value} {...props}>
      {label}
    </option>
  );
};

export default SelectOption;
