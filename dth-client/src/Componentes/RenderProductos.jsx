import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../UI/Spinner";
import CargarImagen from "./CargarImagen";
import { getProductoId, getProductos } from "../api/productosAxios";
import { useProductos, useprefetchProductos } from "../Hooks/useProductos";
const Promo1 = lazy(() => import("./Promo1"));

const RenderProductos = () => {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();

  const { isPending, data, isError, isSuccess, error } = useProductos();

  /* const { isPending, data, isError, isSuccess, error } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
    staleTime: 60000,
    keepPreviusData: true,
  }); */

  const editarProducto = (id) => {
    navigate(`/productos/${id}`);
  };

  /* isSuccess &&
    data.forEach((producto) => {
      queryClient.prefetchQuery({
        queryKey: ["producto", producto.id],
        queryFn: () => getProductoId(producto.id),
        staleTime: 60000,
        keepPreviusData: true,
      });
    }); */

  isSuccess &&
    data.forEach((producto) => {
      useprefetchProductos(producto.id);
    });

  if (isPending) {
    return <Spinner />;
  }
  if (isError) {
    return <div className="errorFetch"> Error: {error.message}</div>;
  }

  return (
    <>
      <div className="container m-10 ">
        <h4 className="text-sky-300 m-4 text-center text-3xl flex flex-row">
          Ofertas de la Semana
        </h4>

        <ul className="w-full flex  flex-wrap justify-center gap-4 ">
          {data?.map((producto, index) => (
            <>
              {index === 8 ? (
                <Suspense fallback={<Spinner />}>
                  <Promo1 />
                </Suspense>
              ) : (
                <li
                  className="card-producto md:min-w-64 md:w-80 text-left p-10  cursor-pointer hover:bg-gradient-to-br from-[#686c70] to-[#060a2e] rounded"
                  key={producto.id}
                  onClick={() => editarProducto(producto.id)}
                >
                  <CargarImagen imagen={producto.url} />
                  <h3 className="leading-8 mt-4"> {producto.descripcion} </h3>

                  <p className="leading-6"> Contado Efectivo</p>
                  <p className="text-3xl leading-10">{producto.contado} </p>
                  <p className="leading-6">
                    Financiado: entrega de ${producto.entrega} y{" "}
                    {producto.ccuota} cuotas de $ {producto.vcuota}
                  </p>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RenderProductos;
