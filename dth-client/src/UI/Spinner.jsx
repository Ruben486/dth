const Spinner = () => {
  return (
    <div className="flex flex-row justify-center align-middle">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.s_linear_infinite]"
        role="status"
      ></div>
      {/* <svg className="bg-emerald-500 animate-spin h-5 w-5 mr-3" viewBox="0 0 32 32">
      </svg> */}
      <p>Cargando...</p>
    </div>
  );
};

export default Spinner;
