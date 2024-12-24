import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CargarImagen = ({ imagen }) => {
  return (
    <div className="img-de-car">
      <LazyLoadImage effect="blur" src={imagen}></LazyLoadImage> 
      {/* <img src={imagen} alt="Imagen Producto" /> */}
    </div>
  );
};

export default CargarImagen;
