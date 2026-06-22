// ============================================================
// Portfolio.jsx
// "But… what about the rest?" — BRICK Agency crossover section
//
// Layout:
//   Header: BRICK badge + title + body + 2 CTA buttons
//   List:   4 numbered accordion rows
//           Each row: num | title + desc + (hover) body | (hover) image
//
// B&W: white badge, numbered in dim text, image revealed on hover
// ============================================================
import { useState } from 'react'
import useInView from '../useInView'
import './Portfolio.css'

const BRICK_ICON = 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7986_brick-icon_black.svg'
const BRICK_WORD = 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7985_brick-logo_black.svg'

const ITEMS = [
  {
    num:   '01',
    title: 'Websites',
    desc:  'Precise design and optimized development',
    body:  'Whether you need an e-commerce platform, a portfolio showcase, or a corporate website, we bring your vision to life with precision and creativity.',
    image: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a799c_DENS%20WEBSITE%20MOCKUP%202.jpg',
  },
  {
    num:   '02',
    title: 'Brands',
    desc:  'Your ideas, reborn',
    body:  'When it comes to bringing your ideas into life, we make sure that everything is thought out and that you have the best outcomes possible.',
    image: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7969_image%20(25).jpeg',
  },
  {
    num:   '03',
    title: 'Apps',
    desc:  'Powering innovation',
    body:  'Unleash the potential of your ideas with our custom app development solutions.',
    image: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7959_316349155_654265573009833_4532756392635293518_n.jpg',
  },
  {
    num:   '04',
    title: 'Content',
    desc:  'Stand out from the digital noise',
    body:  'Our team of talented writers, designers, and strategists collaborate to produce engaging and compelling content across various mediums.',
    image: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a799d_sushito_bus-ad.webp',
  },
]

export default function Portfolio() {
  const [hovered, setHovered] = useState(null)
  const [ref, inView] = useInView(0.08)

  return (
    <section className="port section-border-top" id="portfolio" ref={ref}>
      <div className="container">

        {/* ── Header ── */}
        <div className={`port__header reveal${inView ? ' in-view' : ''}`}>
          {/* BRICK Agency badge (light background, black logos — same as original) */}
        

          <h2 className="port__title">But… what about the rest?</h2>
          <p className="port__body">
            You guessed right, we can also do brand identity, websites, UX/UI, animations,
            video editing, photoshop magic and office stationary while playing a game of
            chess against AI.
          </p>
          <div className="port__ctas">
            <a
              href="https://brickagency.com/"
              className="btn btn-primary"
              target="_blank" rel="noopener noreferrer"
            >Visit Encoded</a>
            <a
              href="https://brickagency.com/work/"
              className="btn btn-secondary"
              target="_blank" rel="noopener noreferrer"
            >Case Studies</a>
          </div>
        </div>

        {/* ── Accordion list ── */}
        <div className={`port__list reveal${inView ? ' in-view' : ''}`}
             style={{ transitionDelay: '0.14s' }}>
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`port__item${hovered === i ? ' port__item--hovered' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Left: number + text */}
              <div className="port__item-left">
                <span className="port__item-num">{item.num}</span>
                <div className="port__item-text">
                  <h3 className="port__item-title">{item.title}</h3>
                  <p  className="port__item-desc">{item.desc}</p>
                  <p  className="port__item-body">{item.body}</p>
                </div>
              </div>
              {/* Right: reveal image */}
              <div className="port__item-img">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
