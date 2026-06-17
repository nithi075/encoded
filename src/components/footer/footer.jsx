// ============================================================
// Footer.jsx
// Layout (identical to original):
//   Top row: Logo + nav links   |   Newsletter form
//   Bottom:  Legal links  ·  Copyright  ·  BRICK Agency credit
// B&W: inverted badge, white/dark button, monochrome tones
// ============================================================
import { useState } from 'react'
import './footer.css'
import logoimg from "../../assests/logo.png"

const LOGO      = logoimg
const BRICK_ICO = 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7986_brick-icon_black.svg'
const BRICK_WRD = 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7985_brick-logo_black.svg'

const LINKS = [
  { label:'How we work',   href:'#services' },
  { label:'Pricing plans', href:'#pricing'  },
  { label:'Showcase',      href:'#gallery'  },
  { label:'About us',      href:'#about'    },
  { label:'Get started',   href:'https://wa.me/message/6KL77QOLZ6OFK1', ext:true },
]

const LEGAL = [
  { label:'Privacy Policy',   href:'https://docs.google.com/document/d/e/2PACX-1vSz6DuDuzRiV06UspSgaWbzifCgCEaaAjbf9luLjquK3X9vc0DXi3TVtmFGg2ZR6Y_8h1lrQfQnbbbj/pub', ext:true },
  { label:'Terms of Service', href:'https://docs.google.com/document/d/e/2PACX-1vQIZ_mTu4q1CUHAiavRdrvOjFLdaCJ18pLbl7-uOClh1BzHE5skmhMMXB9Aa29ksh16RSzlzIIdTD95/pub', ext:true },
  { label:'Cookies Settings', href:'#' },
]

export default function Footer() {
  const [email,     setEmail]     = useState('')
  const [success,   setSuccess]   = useState(false)
  const [error,     setError]     = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) { setError(true); return }
    setError(false)
    setSuccess(true)
    setEmail('')
  }

  return (
    <footer className="footer section-border-top">

      {/* ── Main row ── */}
      <div className="footer__main container">

        {/* Left: logo + nav */}
        <div className="footer__left">
          <a href="#hero" className="footer__logo" aria-label="BRICK Socials home">
            <img src={LOGO} alt="BRICK Socials" />
          </a>
          <nav className="footer__nav" aria-label="Footer navigation">
            {LINKS.map(({ label, href, ext }) => (
              <a
                key={label}
                href={href}
                className="footer__nav-link"
                {...(ext ? { target:'_blank', rel:'noopener noreferrer' } : {})}
              >{label}</a>
            ))}
          </nav>
        </div>

        {/* Right: newsletter */}
        <div className="footer__right">
          <p className="footer__nl-label">Stay in the loop</p>
          <form className="footer__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className={`footer__input${error ? ' footer__input--err' : ''}`}
              placeholder="Your email address"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(false); setSuccess(false) }}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary footer__sub-btn">
              Subscribe
            </button>
          </form>
          <p className="footer__disclaimer">
            By subscribing you agree with our{' '}
            <a href="#" className="footer__disclaimer-link">Privacy Policy</a>
          </p>
          {success && <p className="footer__msg footer__msg--ok">Thank you! You're subscribed.</p>}
          {error   && <p className="footer__msg footer__msg--err">Please enter a valid email.</p>}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">

          {/* Legal links */}
          <div className="footer__legal">
            {LEGAL.map(({ label, href, ext }) => (
              <a
                key={label}
                href={href}
                className="footer__legal-link"
                {...(ext ? { target:'_blank', rel:'noopener noreferrer' } : {})}
              >{label}</a>
            ))}
          </div>

          {/* Copyright */}
          <p className="footer__copy">© 2023 Crescends. All rights reserved.</p>

          {/* Agency credit */}
          <div className="footer__credit">
            <span>Designed and developed by</span>
        
          </div>
        </div>
      </div>
    </footer>
  )
}
