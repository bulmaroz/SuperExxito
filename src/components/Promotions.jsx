import './Promotions.css'

const promos = [
  {
    id: 1,
    title: 'Rib Eye Premium',
    price: 199,
    oldPrice: 229,
    unit: 'kg',
    tag: 'Flash sale',
    description: 'Marmoleo excepcional. Oferta por tiempo limitado.',
  },
  {
    id: 2,
    title: 'Sirloin Select',
    price: 169,
    oldPrice: 189,
    unit: 'kg',
    tag: 'Estrella',
    description: 'Corte magro ideal para la parrilla o plancha.',
  },
  {
    id: 3,
    title: 'Paquete Parrillero',
    price: 499,
    oldPrice: 580,
    unit: 'paquete',
    tag: 'Combo',
    description: 'Arrachera + costilla + chorizo. Para 6-8 personas.',
  },
]

export default function Promotions() {
  return (
    <section id="promociones" className="section promotions">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Ofertas de la semana</span>
          <h2 className="section-title">Promociones</h2>
          <p className="section-subtitle">
            Precios visibles como en nuestro mostrador — aprovecha antes de que se acaben.
          </p>
        </header>

        <div className="promotions__grid">
          {promos.map((promo) => (
            <article key={promo.id} className="promo-card">
              <span className="promo-card__tag">{promo.tag}</span>
              <h3 className="promo-card__title">{promo.title}</h3>
              <p className="promo-card__desc">{promo.description}</p>
              <div className="promo-card__prices">
                {promo.oldPrice && (
                  <span className="promo-card__old">${promo.oldPrice}</span>
                )}
                <span className="promo-card__price">
                  ${promo.price}
                  <small>/{promo.unit}</small>
                </span>
              </div>
              <a href="#contacto" className="btn btn-primary promo-card__btn">
                Preguntar disponibilidad
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
