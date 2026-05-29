import './Hero.css'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <img src={`${base}images/tienda-1.png`} alt="Fachada de Carnicería Super Exxito" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Carnicería y Abarrotes</p>
          <h1 className="hero__title">
            Super <span>Exxito</span>
          </h1>
          <p className="hero__desc">
            Cortes premium, productos frescos y el sabor de barrio que tu familia
            merece. Rib Eye, Sirloin, T-Bone y mucho más — calidad que se nota.
          </p>
          <div className="hero__actions">
            <a href="#catalogo" className="btn btn-primary">
              Ver catálogo
            </a>
            <a href="#promociones" className="btn btn-secondary">
              Promociones
            </a>
          </div>
          <ul className="hero__stats">
            <li>
              <strong>+15</strong>
              <span>Años de experiencia</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>Producto fresco</span>
            </li>
            <li>
              <strong>Dom</strong>
              <span>Barbacoa y menudo</span>
            </li>
          </ul>
        </div>

        <div className="hero__card">
          <img
            src={`${base}images/tienda-2.png`}
            alt="Entrada de Super Exxito en esquina"
            className="hero__card-img"
          />
          <div className="hero__card-badge">
            <span className="hero__card-price">$199</span>
            <span className="hero__card-label">Rib Eye / kg</span>
          </div>
        </div>
      </div>
    </section>
  )
}
