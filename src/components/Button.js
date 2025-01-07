function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-emerald-500 shadow-xl shadow-emerald-500/50 rounded-lg border-2 border-emerald-700 text-white hover:bg-emerald-600 active:bg-emerald-700 hover:border-emerald-800 active:border-emerald-900"
    >
      {text}
    </button>
  );
}

export default Button;
