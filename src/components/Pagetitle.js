function Pagetitle({ title, subtitle }) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-700 px-14 py-8 border-b-2 border-b-emerald-950 text-stone-950">
        <h1 className="text-4xl">{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  }
  
  export default Pagetitle;