import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../Logo";
import Botao from "../Botao";
import Menu from "./Menu";
import styles from "./Cabecalho.module.css";
import SelectGroup from "../Select/SelectGroup";
import SelectOption from "../Select/SelectOption";
import { useState } from "react";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const Cabecalho = () => {
  const [cidade, setCidade] = useState<string>("");

  const mudarCidade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCidade(event.target.value);
  };

  return (
    <header className={styles.cabecalho}>
      <Logo src="/Logo.png" />
      <Menu />
      <SelectGroup
        id="cidade"
        value={cidade}
        onChange={mudarCidade}
        icon={<FaLocationDot />}
      >
        <SelectOption value="" label="Escolha uma cidade" />
        {cidades.map((cidade) => (
          <SelectOption
            key={cidade.id}
            value={cidade.nome}
            label={cidade.nome}
          />
        ))}
      </SelectGroup>
      <div className={styles.icones}>
        <Botao variant="icon" icon={<HiOutlineShoppingCart />} />
        <Botao variant="icon" icon={<HiOutlineUser />} />
      </div>
    </header>
  );
};

export default Cabecalho;
