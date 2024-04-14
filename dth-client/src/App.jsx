import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderProductos from "./Componentes/RenderProductos";
import Landing from "./pages/Landing";
import DetalleProducto from "./Componentes/DetalleProducto";
import Hero from "./Componentes/Hero";
import Navbar from "./Componentes/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<RenderProductos />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
