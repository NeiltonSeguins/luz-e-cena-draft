import React, { ReactNode } from "react";
import styles from "../Select.module.css";

interface SelectGroupProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: ReactNode;
  children: ReactNode;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.seletor} {...props}>
        {children}
      </select>
    </div>
  );
};

export default SelectGroup;
