import NavBar from "./components/NavBar";
import NoFoundpage from "./pages/NotFound";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import logo from "./img/logo-aguilar.png";
import Calculadora from "./components/calculadora/Calculadora";
import ContadorDeClicks from "./components/contador/ContadorDeClicks";
import YugiFind from "./components/yugi-cards/YugiFind";


export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="logo"><img src={logo} alt="Logo Aguilar"  /></div>
      <div className="divPrincipal" >
        <Routes>
          <Route path="/" element={<h2>hola</h2>} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/contador" element={<ContadorDeClicks />} />
          <Route path="/yugicards" element={<YugiFind />} />
          <Route path="*" element={<NoFoundpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
