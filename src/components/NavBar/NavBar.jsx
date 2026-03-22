import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `nav__link ${isActive ? "nav__link--active" : ""}`;

const NavBar = ({ search = "", onSearchChange = () => {}, cartCount = 0 }) => {
  return (
    <header className="nav">
      <nav className="nav__container">
        { }
        <Link to="/" className="nav__brand">
          <img className="nav__logo" src={logo} alt="WideTech" />
          <span className="nav__tagline">your guidestar</span>
        </Link>

        {}
        <div className="nav__search">
          <span className="nav__searchIcon">🔎</span>
          <input
            className="nav__searchInput"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar soluciones..."
          />
        </div>

        {}
        <div className="nav__right">
          <ul className="nav__links">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Productos
              </NavLink>
            </li>

            <li>
              <NavLink to={`/category/${encodeURIComponent("Logística")}`} className={navLinkClass}>
                Logística
              </NavLink>
            </li>

            <li>
              <NavLink to={`/category/${encodeURIComponent("Transporte")}`} className={navLinkClass}>
                Transporte
              </NavLink>
            </li>

            <li>
              <NavLink to={`/category/${encodeURIComponent("Atención al Cliente")}`}
              className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
               >
               Atención
              </NavLink>
            </li>

            <li>
              <NavLink to={`/category/${encodeURIComponent("Gestión de Personal")}`}
               className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
               >
               Gestión
              </NavLink>
            </li>
          </ul>

          <CartWidget count={cartCount} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
