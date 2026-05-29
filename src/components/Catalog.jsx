import { useState, useMemo } from 'react'
import { products, categories } from '../data/products'
import './Catalog.css'

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filtered = useMemo(() => {
    if (activeCategory === 'todos') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="catalogo" className="section catalog">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Nuestros productos</span>
          <h2 className="section-title">Catálogo</h2>
          <p className="section-subtitle">
            Carnes, cortes para asar y abarrotes — selección fresca todos los días.
          </p>
        </header>

        <div className="catalog__filters" role="tablist" aria-label="Categorías">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`catalog__filter ${activeCategory === cat.id ? 'catalog__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="catalog__grid">
          {filtered.map((product) => (
            <article key={product.id} className="product-card">
              {product.badge && (
                <span className="product-card__badge">{product.badge}</span>
              )}
              <div className="product-card__icon" aria-hidden="true">
                {product.category === 'abarrotes' ? '🥬' : '🥩'}
              </div>
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__desc">{product.description}</p>
              {product.price != null ? (
                <p className="product-card__price">
                  ${product.price}
                  <span>/{product.unit}</span>
                </p>
              ) : (
                <p className="product-card__price product-card__price--consult">
                  Consultar precio
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
