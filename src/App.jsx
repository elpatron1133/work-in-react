import NavBarMovil from "./components/navbar/NavBarMovil";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homePage/HomePage";
import NoFoundpage from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./img/logo-aguilar.png";
import Calculadora from "./components/calculadora/Calculadora";
import ContadorDeClicks from "./components/contador/ContadorDeClicks";
import { YugiFind } from "./components/yugi/YugiFind";
import PiedraPapelTijera from "./components/piedrapapeltijera/PiedraPapelTijera";
import TaskMain from "./components/taskList/TaskMain";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <NavsContainer>
        <div className="navBarDestok">
          <NavBar />
        </div>
        <div className="navBarMovil">
          <NavBarMovil />
        </div>
      </NavsContainer>

      <div className="logo">
        <img src={logo} alt="Logo Aguilar" />
      </div>
      <div
        className="divPrincipal container-fluid "
        aria-current="page"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        type="button"
      >
        <Routes>
          <Route path="/react-work" element={<HomePage />} />
          <Route path="/react-work/calculadora" element={<Calculadora />} />
          <Route path="/react-work/contador" element={<ContadorDeClicks />} />
          <Route path="/react-work/yugicards" element={<YugiFind />} />

          <Route
            path="/react-work/piedrapapeltijera"
            element={<PiedraPapelTijera />}
          />
          <Route path="/react-work/tasklist" element={<TaskMain />} />
          <Route path="*" element={<NoFoundpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const NavsContainer = styled.div`
.navbar>.container-fluid{
  flex-direction:column;
    }

    .offcanvas-header .btn-close {
      margin:0 10px
    }

.navBarMovil{
  display: none;
}

@media (max-width: 768px) {
.navBarDestok{
  display: none;
  
}


.navBarMovil{
  display:block;
}
@media (max-width: 477px) {
  
  

`;
