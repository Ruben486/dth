import  {datos}  from "../config/datosPagina";

const Navbar = () => {
  
  return (
      <nav className="navbar bg-slate-900 min-h-[50px] flex flex-row justify-around align-middle gap-6 py-5 sticky top-0 w-full">
        <div className="box-img">
          <img src={datos.logo} alt="" className="logo" />
        </div>
        <h1 className="text-4xl text-center nav-brand">{datos.empresa}
        </h1>
      </nav>
  );
};

export default Navbar;
