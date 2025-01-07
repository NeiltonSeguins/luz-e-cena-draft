import Logo from "../Logo";
import Desenvolvimento from "./Desenvolvimento";
import Funcionamento from "./Funcionamento";
import Institucional from "./Institucional";
import Redes from "./Redes";
import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <div className={styles.logo}>
            <Logo src="Logo_branco.png" />
            <p>Onde a realidade encontra a fantasia!</p>
          </div>
          <Funcionamento />
          <Institucional />
          <Redes />
        </div>
      </footer>
      <Desenvolvimento />
    </>
  );
};

export default Rodape;
