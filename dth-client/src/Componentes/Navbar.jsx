import Hero from "./Hero";

const Navbar = () => {
  console.log("renderizo Navbar");
  return (
      <nav className="nav bg-slate-900 min-h-[50px] flex flex-row justify-around align-middle gap-6 py-5 sticky top-0 w-full">
        <div className="box-img">
          <img src="/logo.jpg" alt="" className="logo" />
        </div>
        <h1 className="text-4xl text-center nav-brand">DE TODO HOGAR</h1>
      </nav>
  );
};

export default Navbar;
