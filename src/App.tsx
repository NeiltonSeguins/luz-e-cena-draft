import Banner from "./componentes/Banner/Index";
import Cabecalho from "./componentes/Cabecalho";
import ListaDeCards from "./componentes/ListaDeCards";
import Newsletter from "./componentes/Newsletter";
import Rodape from "./componentes/Rodape";
function App() {
  return (
    <>
      <Cabecalho />
      <Banner src="/Banner.png" alt="Banner" />
      <ListaDeCards />
      <Banner src="/Combo.png" alt="Combo" />
      <Newsletter />
      <Banner src="Tarja.png" alt="Tarja" />
      <Rodape />
    </>
  );
}

export default App;
