import { Filme } from "../../types";
import CardFilme from "../CardFilme";
import styles from "./ListaFilmes.module.css";

type ListaFilmesProps = {
  filmes: Filme[];
};

const ListaFilmes = ({ filmes }: ListaFilmesProps) => {
  return (
    <ul className={styles.lista}>
      {filmes.map((filme, index) => (
        <CardFilme key={index} {...filme} />
      ))}
    </ul>
  );
};

export default ListaFilmes;
