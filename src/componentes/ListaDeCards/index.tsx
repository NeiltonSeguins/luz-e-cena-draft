import { Filme } from "../../types";
import styles from "./ListaDeCards.module.css";
import Filtros from "../Filtros";
import Titulo from "../Titulo";
import ListaFilmes from "../ListaFilmes";

const filmes: Filme[] = [
  {
    src: "/capas_de_filmes/Amanhecer.png",
    alt: "Imagem do filme Amanhecer",
    titulo: "Amanhecer",
    categoria: "2D",
    censura: "Livre",
    genero: "Romance",
    duracao: 90,
  },
  {
    src: "/capas_de_filmes/Amigo_da_sombra.png",
    alt: "Imagem do filme Amigo da sombra",
    titulo: "Amigo da sombra",
    categoria: "2D",
    censura: "12 anos",
    genero: "Suspense",
    duracao: 110,
  },
  {
    src: "/capas_de_filmes/Amigos_do_bosque_magico.png",
    alt: "Imagem do filme Amigo do bosque mágico",
    titulo: "Amigo do bosque mágico",
    categoria: "2D",
    censura: "Livre",
    genero: "Animação",
    duracao: 60,
  },
  {
    src: "/capas_de_filmes/Caminho_para_o_abismo.png",
    alt: "Imagem do filme Caminho para o abismo",
    titulo: "Caminho para o abismo",
    categoria: "2D",
    censura: "14 anos",
    genero: "Horror",
    duracao: 103,
  },
  {
    src: "/capas_de_filmes/Desastres_do_escritorio.png",
    alt: "Imagem do filme Desastres do Escritório",
    titulo: "Desastres do Escritório",
    categoria: "2D",
    censura: "Livre",
    genero: "Comédia",
    duracao: 85,
  },
  {
    src: "/capas_de_filmes/Mestres_do_futuro.png",
    alt: "Imagem do filme Mestres do Futuro",
    titulo: "Mestres do Futuro",
    categoria: "2D",
    censura: "Livre",
    genero: "Documentário",
    duracao: 120,
  },
  {
    src: "/capas_de_filmes/La_Esperanza.png",
    alt: "Imagem do filme La Esperanza",
    titulo: "La Esperanza",
    categoria: "2D",
    censura: "12 anos",
    genero: "Drama",
    duracao: 98,
  },
  {
    src: "/capas_de_filmes/O_nexus_do_tempo.png",
    alt: "Imagem do filme O nexus do tempo",
    titulo: "O nexus do tempo",
    categoria: "3D",
    censura: "10 anos",
    genero: "Ficcção Científica",
    duracao: 105,
  },
];

const ListaDeCards = () => {
  return (
    <main>
      <section className={styles.container}>
        <Filtros />
        <Titulo elemento="h1" titulo="Em cartaz" />
        <ListaFilmes filmes={filmes} />
      </section>
    </main>
  );
};

export default ListaDeCards;
