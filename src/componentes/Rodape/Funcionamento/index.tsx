import Titulo from "../../Titulo";
import styles from "../Rodape.module.css";

const Funcionamento = () => {
  return (
    <div className={styles.funcionamento}>
      <Titulo elemento="h4" titulo="Funcionamento" className={styles.titulo} />
      <span>Segunda a Sexta - 16h às 00h</span>
      <span>ola@luzecena.com.br</span>
      <span>0800 541 320</span>
    </div>
  );
};

export default Funcionamento;
