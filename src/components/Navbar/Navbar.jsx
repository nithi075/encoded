import { useState, useEffect, useCallback } from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png' // உங்கள் logo path

const NAV_LINKS = [
{ label: 'How we work', href: '#services' },
{ label: 'Pricing plans', href: '#pricing' },
{ label: 'Showcase', href: '#gallery' },
{ label: 'About us', href: '#about' },
]

export default function Navbar() {
const [scrolled, setScrolled] = useState(false)
const [open, setOpen] = useState(false)

useEffect(() => {
const fn = () => setScrolled(window.scrollY > 50)
window.addEventListener('scroll', fn, { passive: true })
return () => window.removeEventListener('scroll', fn)
}, [])

useEffect(() => {
document.body.style.overflow = open ? 'hidden' : ''
return () => {
document.body.style.overflow = ''
}
}, [open])

const onKey = useCallback((e) => {
if (e.key === 'Escape') setOpen(false)
}, [])

useEffect(() => {
window.addEventListener('keydown', onKey)
return () => window.removeEventListener('keydown', onKey)
}, [onKey])

const close = () => setOpen(false)

return (
<>
<header
className={`nav${scrolled ? ' nav--scrolled' : ''}`}
role="banner"
> <div className="nav__row container">


      {/* Logo */}
      <a
        href="#hero"
        className="nav__logo"
        onClick={close}
        aria-label="My Company"
      >
        <img
          src={logo}
          alt="My Company"
          className="nav__logo-img"
        />
      </a>

      {/* Desktop Links */}
      <nav className="nav__links" aria-label="Main">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="nav__link">
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="nav__ctas">
        <a
          href="https://calendly.com/brick-socials/brick-social-information-call"
          className="btn btn-secondary nav__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a demo
        </a>

        <a
          href="https://wa.me/message/6KL77QOLZ6OFK1"
          className="btn btn-primary nav__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
      </div>

      {/* Hamburger */}
      <button
        className={`nav__burger${open ? ' is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>

  {/* Mobile Menu */}
  <div
    className={`nav__mobile${open ? ' is-open' : ''}`}
    aria-hidden={!open}
  >
    <nav className="nav__mobile-links" aria-label="Mobile">
      {NAV_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="nav__mobile-link"
          onClick={close}
        >
          {label}
        </a>
      ))}
    </nav>

    <div className="nav__mobile-ctas">
      <a
        href="https://calendly.com/brick-socials/brick-social-information-call"
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
      >
        Book a demo
      </a>

      <a
        href="https://wa.me/message/6KL77QOLZ6OFK1"
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
      >
        Get started
      </a>
    </div>
  </div>
</>


)
}
