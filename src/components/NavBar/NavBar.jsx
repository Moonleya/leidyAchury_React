import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #ddd" }}>
            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                {/* Logo */}
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                    MiTienda 
                </div>

                {/* Links */}
                <ul style={{ listStyle: "none", display: "flex", gap: "16px", margin: 0, padding: 0 }}>
                    <li><a href="#" style={{ textDecoration: "none" }}>Inicio</a></li>
                    <li><a href="#" style={{ textDecoration: "none" }}>Productos</a></li>
                    <li><a href="#" style={{ textDecoration: "none" }}>Ofertas</a></li>
                    <li><a href="#" style={{ textDecoration: "none" }}>Contacto</a></li>
                </ul>

                {/* Carrito */}
                <CartWidget />
            </nav>
        </header>
    );
}

export default NavBar;
