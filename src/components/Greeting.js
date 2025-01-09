function Greeting({ name, occupation }) {
  return (
    <>
      <div className="w-1/2 p-2 bg-emerald-100 border-2 border-emerald-700 mx-auto mt-5 rounded-xl">
        <h1 className="px-14 pt-8 text-3xl font-bold text-slate-950 text-center">
          Hello, {name}!
        </h1>
        <p className="text-center">
          {name} is a great {occupation}.
        </p>
      </div>
    </>
  );
}

export default Greeting;
