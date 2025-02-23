import { Route, Routes } from "react-router-dom";
import History from "../../pages/history";
import Home from "../../pages/home";
import Library from "../../pages/library";
import Chips from "../chips";
import { Container } from "./style";
import Login from "../../pages/login";


function PageContent (){
  return(
    <>
      <Container>
        <Chips/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default PageContent;