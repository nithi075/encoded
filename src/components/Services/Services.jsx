// ============================================================
// Services.jsx — THREE sub-sections (exact original order):
//
//  A) "Take your content to the next level 🚀"
//     Left: title + body + 10 service tag pills
//     Right: 2×2 media grid (videos + images)
//
//  B) "Unleash your potential with the right marketing strategy ✨"
//     Full-width text + 2 workflow cards
//
//  C) "Some of the industries we love to work with 🧡"
//     Left: title + body + CTAs
//     Right: 8 industry cards in 4×2 grid
//
// B&W: all accent colors replaced with monochrome
// ============================================================
import { useRef, useEffect } from 'react'
import useInView from '../useInView'
import './Services.css'
import video1 from '../../assests/video1.mp4'
import video2 from '../../assests/video2.mp4'
import video3 from '../../assests/video3.mp4'
import video4 from '../../assests/video4.mp4'

import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.jpg'
import img4 from '../../assests/img4.jpg'

/* ── Service tags (section A) ── */
const SERVICE_TAGS = [
  'Film / Video Production',
  'Automated Posting',
  'Influencer Management',
  'Graphic Design',
  'Ad Campaigns',
  'Photography',
  'Copywriting',
  'Face Filters',
  'Animated Stories',
  'UGC Content',
]

/* ── Section A media grid items ── */
const MEDIA_A = [
  {
    type: 'video',
    src: video1,
    poster: img1,
    tall: true,
  },
  {
    type: 'image',
    src: img2,
    alt: 'Project 1',
    tall: false,
  },
  {
    type: 'image',
    src: img3,
    alt: 'Project 2',
    tall: false,
  },
  {
    type: 'video',
    src: video2,
    poster: img4,
    tall: true,
  },
]

/* ── Workflow cards (section B) ── */
const WORKFLOW_ITEMS = [
  { title: 'Single Account Management',             desc: 'Perfect for brands with one focused social identity.' },
  { title: 'Multiple or Complex Account Management',desc: 'Ideal for multi-brand or franchise operations.' },
]

/* ── Industries (section C) ── */
const INDUSTRIES = [
  'Hi-Tech','Hospitality','Corporate','SaaS',
  'Entertainment','Non-profit','Real Estate','Fitness',
]

/* Autoplay video component */
function SvcVideo({ src, poster }) {
  const ref = useRef(null)
  useEffect(() => { ref.current?.play().catch(() => {}) }, [])
  return <video ref={ref} src={src} poster={poster} muted autoPlay loop playsInline />
}

export default function Services() {
  const [aRef, aIn] = useInView(0.08)
  const [bRef, bIn] = useInView(0.1)
  const [cRef, cIn] = useInView(0.08)

  return (
    <section className="svc" id="services">

      {/* ══════════════════════════════
          A — Content level-up
      ══════════════════════════════ */}
      <div className="svc__content section-border-top" ref={aRef}>
        <div className="container">
          <div className={`svc__content-grid reveal${aIn ? ' in-view' : ''}`}>

            {/* Left */}
            <div className="svc__content-left">
              <h2 className="svc__heading">
                Take your content to the next level 🚀
              </h2>
              <p className="svc__body">
                From developing the core of your social media strategy, to generating unique
                posts with targeted copywriting: we got you!
              </p>
              <div className="svc__tags">
                {SERVICE_TAGS.map((tag, i) => (
                  <span key={i} className="svc__tag">
                    <span className="svc__tag-dot" aria-hidden />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right media grid */}
            <div className="svc__media-grid">
              {MEDIA_A.map((item, i) => (
                <div
                  key={i}
                  className={`svc__media-item${item.tall ? ' svc__media-item--tall' : ''}`}
                >
                  {item.type === 'video'
                    ? <SvcVideo src={item.src} poster={item.poster} />
                    : <img src={item.src} alt={item.alt} loading="lazy" />
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          B — Workflow
      ══════════════════════════════ */}
      <div className="svc__workflow section-border-top" ref={bRef}>
        <div className="container">
          <div className={`svc__workflow-inner reveal${bIn ? ' in-view' : ''}`}>
            <h2 className="svc__heading svc__heading--wide">
              Unleash your potential with the right marketing strategy ✨
            </h2>
            <p className="svc__body svc__body--wide">
              We have super clear workflows to make your social media pop out!
              We know how to work with your brand and team like no other would.
              Our organisation is adaptable to your needs!
            </p>
            <div className="svc__workflow-cards">
              {WORKFLOW_ITEMS.map((item, i) => (
                <div key={i} className="svc__workflow-card">
                  <span className="svc__workflow-num">0{i + 1}</span>
                  <div>
                    <h3 className="svc__workflow-card-title">{item.title}</h3>
                    <p  className="svc__workflow-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          C — Industries
      ══════════════════════════════ */}
      <div className="svc__industries section-border-top" ref={cRef}>
        <div className="container">
          <div className={`svc__industries-inner reveal${cIn ? ' in-view' : ''}`}>

            {/* Header row */}
            <div className="svc__industries-header">
              <h2 className="svc__heading">
                Some of the industries we love to work with 🧡
              </h2>
              <p className="svc__body">
                These are just some of the industries we help on a regular basis.
                Learn how we work with them, or just hit us up if you have other needs.
              </p>
              <div className="svc__industries-ctas">
                <a href="#services" className="btn btn-primary">How we work</a>
                <a href="#about"    className="btn btn-secondary">About us</a>
              </div>
            </div>

            {/* Industry cards grid */}
            <div className="svc__industries-grid">
              {INDUSTRIES.map((ind, i) => (
                <div
                  key={i}
                  className="svc__industry-card"
                  style={{ transitionDelay: cIn ? `${i * 0.06}s` : '0s' }}
                >
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
