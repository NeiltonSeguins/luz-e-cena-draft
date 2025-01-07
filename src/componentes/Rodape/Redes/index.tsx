import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Link from "../../Link";
import styles from "../Rodape.module.css";

const Redes = () => {
  return (
    <div className={styles.redes}>
      <h4>Siga nossas redes:</h4>
      <div className={styles.icones}>
        <Link href="#" icon={<FaWhatsapp className={styles.icone} />} />
        <Link href="#" icon={<FaInstagram className={styles.icone} />} />
        <Link href="#" icon={<FaTiktok className={styles.icone} />} />
      </div>
    </div>
  );
};

export default Redes;
