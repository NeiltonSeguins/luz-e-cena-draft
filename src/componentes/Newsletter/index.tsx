import Botao from "../Botao";
import InputText from "../InputText";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.formulario}>
        <InputText type="email" placeholder="Digite o seu melhor e-mail" />
        <Botao type="submit">Inscrever-se</Botao>
      </form>
    </div>
  );
};

export default Newsletter;
