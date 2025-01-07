import Link from "../../Link";
import styles from "../Cabecalho.module.css";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.navegacao}>
        <li>
          <Link href="#">Eventos</Link>
        </li>
        <li>
          <Link href="#">Clube Fidelidade</Link>
        </li>
        <li>
          <Link href="#">Sobre nós</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
