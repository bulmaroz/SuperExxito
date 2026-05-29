import { testimonials } from '../data/testimonials'
import './Testimonials.css'

function Stars({ count }) {
  return (
    <span className="stars" aria-label={`${count} de 5 estrellas`}>
      {'★'.repeat(count)}
    </span>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="section testimonials">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Lo que dicen nuestros clientes</span>
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle">
            La confianza del barrio nos respalda. Estas son algunas opiniones de quienes nos visitan.
          </p>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="testimonial-card">
              <Stars count={t.rating} />
              <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
              <footer className="testimonial-card__author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
