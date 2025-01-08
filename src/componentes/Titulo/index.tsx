import React from "react";
import styles from "./Titulo.module.css";

type TituloProps = {
  titulo: string;
  elemento: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.HTMLProps<HTMLHeadingElement>;

const Titulo = ({ titulo, elemento, ...rest }: TituloProps) => {
  const Tag = elemento;

  return (
    <Tag className={styles.titulo} {...rest}>
      {titulo}
    </Tag>
  );
};

export default Titulo;
