import { useEffect, useState } from "react";
import { getProductos } from "../api/productosApi";
import { useNavigate } from "react-router-dom";
import Promo1 from "./Promo1";

const RenderProductos = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const editarProducto = (id) => {
    navigate(`/productos/${id}`);
  };
  const fetchApi = async () => {
    try {
      const resdatos = await getProductos();
      setData(resdatos);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container m-10 ">
      <div className="container">
        
        <h4 className="text-sky-300 m-4 text-center text-3xl">
          Ofertas de la Semana
        </h4>
      </div>
      <ul className="w-full flex flex-wrap justify-center align-middle text-wrap gap-3 ">
        {data?.map((producto, index) => (
          <>
            {index === 6 ? (
              <Promo1 />
            ) : (
              <li
                className="card-producto md:min-w-64 md:w-80 text-left p-10  cursor-pointer hover:bg-gradient-to-br from-[#686c70] to-[#060a2e] rounded"
                key={producto.id}
                onClick={() => editarProducto(producto.id)}
              >
                <img src={producto.url} alt="imagen" />
                <h3 className="leading-8 mt-4"> {producto.descripcion} </h3>

                <p className="leading-6"> Contado Efectivo</p>
                <p className="text-3xl leading-10">{producto.contado} </p>
                <p className="leading-6">
                  Financiado: entrega de ${producto.entrega} y {producto.ccuota}{" "}
                  cuotas de $ {producto.vcuota}
                </p>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
export default RenderProductos;
