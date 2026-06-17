// ============================================================
// Hero.jsx
// Layout: Left headline + CTAs | Right 3-column auto-scrolling media grid
// Columns: col1 scrolls UP · col2 scrolls DOWN · col3 scrolls UP (offset)
// Media: alternating video + image items
// B&W: dark overlays, white glow, no colored accents
// ============================================================
import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import video1 from '../../assests/video1.mp4'
import video2 from '../../assests/video2.mp4'
import video3 from '../../assests/video3.mp4'
import video4 from '../../assests/video4.mp4'
import video5 from '../../assests/video5.mp4'
import video6 from '../../assests/video6.mp4'

import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.jpg'
import img4 from '../../assests/img4.jpg'
import img5 from '../../assests/img5.jpg'
import img6 from '../../assests/img6.jpg'

/* ── Media items (3 columns × 4 items, duplicated for infinite loop) ── */
const COL1 = [
  { type: 'video', src: video1, poster: img1 },
  { type: 'video', src: video2, poster: img2 },
  { type: 'video', src: video3, poster: img3 },
  { type: 'video', src: video4, poster: img4 },
]

const COL2 = [
  { type: 'video', src: video5, poster: img5 },
  { type: 'video', src: video6, poster: img6 },
  { type: 'video', src: video1, poster: img1 },
  { type: 'video', src: video2, poster: img2 },
]

const COL3 = [
  { type: 'video', src: video3, poster: img3 },
  { type: 'video', src: video4, poster: img4 },
  { type: 'video', src: video5, poster: img5 },
  { type: 'video', src: video6, poster: img6 },
]

/* Autoplay video helper */
function MediaItem({ item, className = '' }) {
  const vRef = useRef(null)
  useEffect(() => {
    if (item.type === 'video' && vRef.current) {
      vRef.current.play().catch(() => {})
    }
  }, [item.type])

  return (
    <div className={`hg__item${item.type === 'video' ? ' hg__item--video' : ''} ${className}`}>
      {item.type === 'video'
        ? <video ref={vRef} src={item.src} poster={item.poster} muted autoPlay loop playsInline />
        : <img src={item.src} alt={item.alt || ''} loading="lazy" />
      }
    </div>
  )
}

/* Scrolling column: duplicate array for seamless loop */
function MediaColumn({ items, direction, offsetClass = '' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`hg__col hg__col--${direction} ${offsetClass}`}>
      {doubled.map((item, i) => (
        <MediaItem key={i} item={item} />
      ))}
    </div>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section className="hero" id="hero">
      {/* ── Left: headline + CTAs ── */}
      <div className={`hero__left${visible ? ' hero__left--in' : ''}`}>
        <div className="hero__left-inner container">
          <p className="hero__eyebrow">Social Media Management</p>
          <h1 className="hero__title">
            Unleash the full<br />
            potential of your<br />
            <span className="hero__title-em">Social Media</span><br />
            Possibilities
          </h1>
          <p className="hero__sub">
            Through optimal Social Media Management and effective Content Creation
            we can let you reach out to whomever you desire as your customers.
          </p>
          <div className="hero__ctas">
            <a
              href="https://wa.me/message/6KL77QOLZ6OFK1"
              className="btn btn-primary"
              target="_blank" rel="noopener noreferrer"
            >Get started</a>
            <a
              href="https://calendly.com/brick-socials/brick-social-information-call"
              className="btn btn-secondary"
              target="_blank" rel="noopener noreferrer"
            >Book a demo</a>
          </div>
        </div>
      </div>

      {/* ── Right: scrolling 3-column grid ── */}
      <div className="hero__right">
        <div className="hg">
          <MediaColumn items={COL1} direction="up"   />
          <MediaColumn items={COL2} direction="down" />
          <MediaColumn items={COL3} direction="up" offsetClass="hg__col--offset" />
        </div>
        {/* Fade top & bottom */}
        <div className="hg__fade hg__fade--top"    aria-hidden />
        <div className="hg__fade hg__fade--bottom" aria-hidden />
      </div>

      {/* Soft white ambient glow behind hero text */}
      <div className="hero__glow" aria-hidden />
    </section>
  )
}
