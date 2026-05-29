import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Super Exxito</span>
          <p>Carnicería y Abarrotes — calidad y sabor de barrio.</p>
        </div>
        <nav className="footer__nav" aria-label="Pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#promociones">Promociones</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p className="footer__copy">
          © {year} Super Exxito. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
