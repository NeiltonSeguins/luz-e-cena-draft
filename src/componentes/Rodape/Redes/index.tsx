import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Link from "../../Link";
import styles from "../Rodape.module.css";
import Titulo from "../../Titulo";

const Redes = () => {
  return (
    <div className={styles.redes}>
      <Titulo
        elemento="h4"
        titulo="Siga nossas redes:"
        className={styles.titulo}
      />
      {/* <h4>Siga nossas redes:</h4> */}
      <div className={styles.icones}>
        <Link href="#" icon={<FaWhatsapp className={styles.icone} />} />
        <Link href="#" icon={<FaInstagram className={styles.icone} />} />
        <Link href="#" icon={<FaTiktok className={styles.icone} />} />
      </div>
    </div>
  );
};

export default Redes;
