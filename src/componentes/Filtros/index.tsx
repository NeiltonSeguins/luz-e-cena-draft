import { FaSearch } from "react-icons/fa";
import InputText from "../InputText";
import Link from "../Link";
import styles from "./Filtros.module.css";

const Filtros = () => {
  return (
    <>
      <div className={styles.ancoras}>
        <Link href="#">Em cartaz</Link>
        <Link href="#">Em breve</Link>
      </div>
      <InputText variant="secondary" icon={<FaSearch />} />
    </>
  );
};

export default Filtros;
