import NavBar from "./components/navbar/NavBar";
import NoFoundpage from "./pages/NotFound";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import logo from "./img/logo-aguilar.png";
import Calculadora from "./components/calculadora/Calculadora";
import ContadorDeClicks from "./components/contador/ContadorDeClicks";
import { YugiFind } from "./components/yugi/YugiFind";
import PiedraPapelTijera from "./components/piedrapapeltijera/PiedraPapelTijera";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="logo"><img src={logo} alt="Logo Aguilar"  /></div>
      <div className="divPrincipal" >
        <Routes>
          <Route path="/react-work" element={<h2>Home page en construccion</h2>} />
          <Route path="/react-work/calculadora" element={<Calculadora />} />
          <Route path="/react-work/contador" element={<ContadorDeClicks />} />
          <Route path="/react-work/yugi" element={<YugiFind />} />
          <Route path="/react-work/piedrapapeltijera" element={<PiedraPapelTijera />} />
          <Route path="*" element={<NoFoundpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
