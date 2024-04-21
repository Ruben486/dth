
import { datos } from "../config/datosPagina";
const Hero = () => {
  return (
    <div className='hero w-full my-5'>
        <img className="img-hero" src={datos.imgHero} alt="" />
    </div>
  )
}

export default Hero; 