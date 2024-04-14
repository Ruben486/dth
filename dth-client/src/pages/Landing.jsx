import Hero from "../Componentes/Hero";
import Navbar from "../Componentes/Navbar";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Outlet />
    </section>
  );
};

export default Landing;
