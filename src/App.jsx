import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import Menu from "./components/menu";
import { MenuContext } from "./contexts/menuContext";

import PageContent from "./components/pageContent";
import { PageWrapper } from "./styles/PageWrapper/style";

function App() {
  const { openMenu, setOpenMenu} = useContext(MenuContext);

  return (
    <>
      <BrowserRouter>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <PageWrapper openMenu={openMenu}>
          <Menu openMenu={openMenu}/>
          <PageContent/>
        </PageWrapper>
        
      </BrowserRouter>
    </>
  )
}

export default App
