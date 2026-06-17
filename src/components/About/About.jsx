// ============================================================
// About.jsx — THREE sub-sections (exact original order):
//
//  A) Manifesto strip  — 7 bold philosophical lines
//  B) "Mastering the Social Symphony 🎻" — headline + body + CTAs
//  C) Client logo marquee — infinite left-scroll, 10 logos
//
// B&W: all borders/text use monochrome tokens
// ============================================================
import useInView from '../useInView'
import './About.css'

/* ── A: Manifesto lines ── */
const MANIFESTO = [
  'Social Media Management seems like a deceivingly easy game or chore to many entrepreneurs.',
  'It may already have dawned on you that just having relevant content gives by no means any guarantee that you will reach your target audience.',
  'Let alone to persuade them to take action towards your goals.',
  'We at BRICK Socials have made Social Media Management an art form.',
  'For us all elements that make up your presence online is like a dance or an intricate painting.',
  'Every part has its place, importance and, above all, timing to reach its ultimate effectiveness.',
  'We subject your persons of interest to the perfect stream of content that will move them towards your care.',
]

/* ── C: Client logos ── */
const LOGOS = [
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7913_logo-dens-alt.svg',          alt:'DENS'       },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7914_rid_logo-dot-black.svg',     alt:'RID'        },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7915_2ndhome_logo-black.svg',     alt:'2nd Home'   },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78de_ratherlost.svg',             alt:'Ratherlost' },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a791c_tt_wordmark-black.svg',      alt:'TT'         },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7916_de-zotte_logo-02-black.svg', alt:'De Zotte'   },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7918_nbc_logo-black.svg',         alt:'NBC'        },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a7919_feijoa_logo.svg',            alt:'Feijoa'     },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a791a_alrmd_logo-black1.svg',      alt:'ALRMD'      },
  { src:'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a79a2_360-logo_black.svg',         alt:'360'        },
]
/* triple for seamless loop */
const LOGO_LOOP = [...LOGOS, ...LOGOS, ...LOGOS]

export default function About() {
  const [maniRef, maniIn]     = useInView(0.05)
  const [sympRef, sympIn]     = useInView(0.1)

  return (
    <section className="about" id="about">

      {/* ── A: Manifesto ── */}
      <div className="about__manifesto section-border-top" ref={maniRef}>
        <div className="container">
          <div className="about__manifesto-lines">
            {MANIFESTO.map((line, i) => (
              <p
                key={i}
                className={`about__mline${maniIn ? ' in-view' : ''}`}
                style={{ transitionDelay: maniIn ? `${i * 0.09}s` : '0s' }}
              >{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ── B: Symphony ── */}
      <div className="about__symphony section-border-top" ref={sympRef} id="about-symphony">
        <div className="container">
          <div className={`about__symphony-inner reveal${sympIn ? ' in-view' : ''}`}>
            <div className="about__symphony-text">
              <h2 className="about__symphony-title">
                Mastering the Social Symphony 🎻
              </h2>
              <p className="about__symphony-body">
                In a world where the digital landscape is both vast and competitive,
                we understand that the art of engagement extends far beyond just posting content.
              </p>
              <div className="about__symphony-ctas">
                <a href="#pricing" className="btn btn-primary">Pricing</a>
                <a href="#gallery" className="btn btn-secondary">Showcase</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── C: Logo marquee ── */}
      <div className="about__logos section-border-top">
        <div className="about__logos-label container">
          <p>Trusted by these amazing companies worldwide</p>
        </div>
        <div className="about__marquee-wrap">
          <div className="about__marquee-track">
            {LOGO_LOOP.map((logo, i) => (
              <div key={i} className="about__logo-item">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
