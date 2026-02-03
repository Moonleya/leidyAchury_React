import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <header className="nav">
      <nav className="nav__container">
        
        {/* Logo + nombre */}
        <div className="nav__brand">
          <img className="nav__logo" src={logo} alt="Logo WideTech" />
          <span className="nav__name">MarketPlace</span>
        </div>

        {/* Links */}
        <ul className="nav__links">
          <li><a href="#" className="nav__link">Inicio</a></li>
          <li><a href="#" className="nav__link">Productos</a></li>
          <li><a href="#" className="nav__link">Ofertas</a></li>
          <li><a href="#" className="nav__link">Contacto</a></li>
        </ul>

        {/* Carrito */}
        <div className="nav__cart">
          <CartWidget />
        </div>

            </nav>
        </header>
    );
}

export default NavBar;
