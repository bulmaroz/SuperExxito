import './Contact.css'

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1'

export default function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">Visítanos</span>
          <h2 className="section-title">Contacto y ubicación</h2>
          <p className="section-subtitle">
            Estamos en la esquina del barrio, listos para atenderte con la mejor calidad.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card">
              <h3>Horario</h3>
              <ul>
                <li>
                  <span>Lunes – Sábado</span>
                  <strong>8:00 – 20:00</strong>
                </li>
                <li>
                  <span>Domingo</span>
                  <strong>7:00 – 15:00</strong>
                </li>
                <li className="contact__highlight">
                  Barbacoa y menudo desde las 8:00
                </li>
              </ul>
            </div>

            <div className="contact__card">
              <h3>Datos de contacto</h3>
              <ul className="contact__details">
                <li>
                  <span className="contact__icon" aria-hidden="true">📍</span>
                  <div>
                    <strong>Dirección</strong>
                    <p>Av. del Barrio #123, Col. Centro, CDMX</p>
                  </div>
                </li>
                <li>
                  <span className="contact__icon" aria-hidden="true">📞</span>
                  <div>
                    <strong>Teléfono</strong>
                    <p>
                      <a href="tel:+528448077145">844 807 7145</a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="contact__icon" aria-hidden="true">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>
                      <a
                        href="https://wa.me/525512345678"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enviar mensaje
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="contact__icon" aria-hidden="true">✉️</span>
                  <div>
                    <strong>Correo</strong>
                    <p>
                      <a href="mailto:contacto@superexxito.mx">
                        contacto@superexxito.mx
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <a href="tel:+528448077145" className="btn btn-primary contact__call">
              Llamar ahora
            </a>
          </div>

          <div className="contact__map-wrap">
            <iframe
              title="Ubicación de Super Exxito en el mapa"
              src={MAP_EMBED}
              className="contact__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
