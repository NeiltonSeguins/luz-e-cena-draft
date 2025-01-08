import Link from "../../Link";
import Titulo from "../../Titulo";
import styles from "../Rodape.module.css";

const Institucional = () => {
  return (
    <div className={styles.institucional}>
      <Titulo elemento="h4" titulo="Institucional" className={styles.titulo} />
      <Link className={styles.ancora} href="#">
        Sobre nós
      </Link>
      <Link className={styles.ancora} href="#">
        Para empresas
      </Link>
      <Link className={styles.ancora} href="#">
        Clube fidelidade
      </Link>
    </div>
  );
};

export default Institucional;
