import { useParams, Link } from "react-router-dom";
import { getProducto } from "../api/productosApi";
import { useEffect, useState } from "react";


const DetalleProducto = () => {
  const params = useParams();
  const [producto, setProducto] = useState({});

  const traerDato = async () => {
    const dato = await getProducto(params.id);
    console.log(dato);
    setProducto(dato);
  };

  useEffect(() => {
    traerDato();
  }, [params]);

  return (
    <article className="box-producto flex flex-row gap-8 m-10 p-10 ">
      <section className="det-prod-s-izq">
        <img src={producto.url} className="img-producto" />
      </section>
      <section className="det-prod-s-der">
        <div className="circ-home">
          <Link className="" to={"/"}>
            <img src="/home.svg" />
          </Link>
        </div>
        <h3 className="text-4xl">{producto.descripcion}</h3>
        <p>Contado Efectivo:</p>
        <h3 className="text-3xl">$ {producto.contado}</h3>
        <p>Financiado:</p>
        {producto.ccuota && (
          <p className="det-prod-cuotas text-wrap text-emerald-500 ">
            Entrega $: {producto.entrega} y {producto.ccuota} cuotas de ${" "}
            {producto.vcuota}{" "}
          </p>
        )}
        <p>Medios de Pago:</p>
        <section className="medios-pagos flex flex-row align-middle gap-5 justify-start">
          <img src="/Mercado_pago.png" alt="" className="w-14 h-12" />
          <img src="/Mastercard.png" alt="" className="w-14 h-12" />
          <img src="/visa-electron.png" alt="" className="w-12 h-9" />
          <img src="/amex.png" alt="" className="w-14 h-11" />
          <img src="/naranjax.png" alt="" className="w-10 h-9" />
        </section>
      </section>
    </article>
  );
};

export default DetalleProducto;
