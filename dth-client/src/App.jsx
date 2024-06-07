import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderProductos from "./Componentes/RenderProductos";
import Landing from "./pages/Landing";
// import DetalleProducto from "./Componentes/DetalleProducto";
import { Suspense } from "react";
import Spinner from "./UI/Spinner";

const DetalleProducto = lazy(() => import("./Componentes/DetalleProducto"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route index element={<RenderProductos />} />  
              <Route path="/productos/:id" element={<DetalleProducto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
