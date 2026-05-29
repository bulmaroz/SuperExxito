import './SundaySpecials.css'

export default function SundaySpecials() {
  return (
    <section className="sunday" aria-labelledby="sunday-title">
      <div className="container sunday__inner">
        <div className="sunday__content">
          <span className="sunday__badge">Solo domingos</span>
          <h2 id="sunday-title" className="sunday__title">
            Rica barbacoa y menudo los domingos
          </h2>
          <p className="sunday__text">
            Como en nuestro letrero de siempre: el sabor tradicional que esperas cada
            semana. Barbacoa de res al estilo casero y menudo recién hecho para
            empezar tu domingo con el pie derecho.
          </p>
          <ul className="sunday__list">
            <li>Barbacoa — $280 / kg</li>
            <li>Menudo — $95 / litro</li>
            <li>Tortillas y condimentos disponibles en tienda</li>
          </ul>
          <a href="#contacto" className="btn btn-secondary">
            Reserva tu pedido
          </a>
        </div>
        <div className="sunday__visual" aria-hidden="true">
          <div className="sunday__plate">🍖</div>
          <div className="sunday__agave">🌿</div>
        </div>
      </div>
    </section>
  )
}
