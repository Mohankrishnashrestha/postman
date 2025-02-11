import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bg-amber-200 flex justify-around p-5 text-2xl">
        <NavLink to={"/login"}> login</NavLink>
        <NavLink to={"/home"}> Home</NavLink>
        <NavLink to={"/about"}> About</NavLink>
      </nav>
    </div>
  );
}

export default Header;
