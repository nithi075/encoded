// ============================================================
// Contact.jsx
// "Let's get your socials burning 🔥"
// Original: orange glow CTA
// B&W: white radial glow, black bg, white/black buttons only
// Layout: centred text, identical to original
// ============================================================
import useInView from '../useInView'
import './Contact.css'

export default function Contact() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="cta section-border-top" id="contact" ref={ref}>
      {/* White radial glow (replaces orange) */}
      <div className="cta__glow" aria-hidden />

      <div className="container">
        <div className={`cta__inner reveal${inView ? ' in-view' : ''}`}>
          <h2 className="cta__title">
            Let's get your socials burning 🔥
          </h2>
          <p className="cta__body">
            Take your business to new heights with a killer social media marketing plan.
          </p>
          <div className="cta__btns">
            <a
              href="https://wa.me/message/6KL77QOLZ6OFK1"
              className="btn btn-primary cta__btn"
              target="_blank" rel="noopener noreferrer"
            >Get started</a>
            <a
              href="https://calendly.com/brick-socials/brick-social-information-call"
              className="btn btn-secondary cta__btn"
              target="_blank" rel="noopener noreferrer"
            >Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
