import React from "react";
import styles from "./Input.module.css";
import Botao from "../Botao";

type InputProps = {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText: React.FC<InputProps> = ({
  variant = "primary",
  icon,
  ...rest
}) => {
  return (
    <label
      htmlFor="input-text"
      className={`${styles.inputWrapper} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      <input name="input-text" className={styles.input} {...rest} />
      {icon && <Botao variant="icon" icon={icon} />}
    </label>
  );
};

export default InputText;
