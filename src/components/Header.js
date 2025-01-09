import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header h-36 w-full flex bg-gradient-to-r from-fuchsia-950 to-emerald-700 border-b-2 border-b-emerald-950 text-stone-50 px-14">
      <h1 className="flex flex-1 justify-start self-center text-4xl">React Basics Assignments</h1>
      <nav className="flex flex-1 justify-end self-center">
        <ul className="flex flex-row gap-5 text-xl">
          <NavItem title="Home" to="/" />
          <NavItem title="Easy" to="/Easy" />
          <NavItem title="Medium" to="/Medium" />
          <NavItem title="Hard" to="/Hard" />
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ title, to }) {
    return (
      <li className="hover:text-stone-400 hover:underline">
        <Link to={to}>{title}</Link>
      </li>
    );
  }
export default Header;
