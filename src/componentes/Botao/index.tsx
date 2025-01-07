import React from "react";
import classNames from "classnames";
import styles from "./Botao.module.css";

type BotaoProps = {
  variant?: "primary" | "icon";
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Botao: React.FC<BotaoProps> = ({
  variant = "primary",
  icon,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.botao, {
        [styles.primary]: variant === "primary",
        [styles.icon]: variant === "icon",
      })}
      {...rest}
    >
      {icon && icon}
      {variant === "primary" && children}
    </button>
  );
};

export default Botao;
