import React from "react";
import styles from "./Link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: React.ReactNode;
};

const Link = ({ children, icon, ...rest }: LinkProps) => {
  return (
    <a className={styles.link} {...rest}>
      {icon ? icon : children}
    </a>
  );
};

export default Link;
