import Botao from "../Botao";
import InputText from "../InputText";
import Titulo from "../Titulo";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <Titulo
        className={styles.titulo}
        elemento="h2"
        titulo="Inscreva-se para ganhar descontos!"
      />
      <form className={styles.formulario}>
        <InputText type="email" placeholder="Digite o seu melhor e-mail" />
        <Botao type="submit">Inscrever-se</Botao>
      </form>
    </div>
  );
};

export default Newsletter;
