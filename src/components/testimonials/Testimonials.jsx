// ============================================================
// Testimonials.jsx
// "The word on the street is..."
// Two infinite-scroll rows:
//   Row 1 → scrolls LEFT  (6 cards)
//   Row 2 → scrolls RIGHT (6 cards, offset start)
// B&W: card borders white/subtle, no color accents
// ============================================================
import useInView from '../useInView'
import './Testimonials.css'

const REVIEWS = [
  {
    text: 'Professional team of creatives with high attention for detail and willingness to think along with specific wishes of the client.',
    avatar: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fd_bs_revirew_J.png',
    name: 'Jort Schenk',
    role: 'Event Programmer, Ratherlost',
  },
  {
    text: 'Dream team! They helped us so much setting up our social media strategy. Really recommend them if you need professionals ;-)',
    avatar: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fb_bs_revirew_K.png',
    name: 'Kayleigh van Doorn',
    role: 'Manager, Leadership Training',
  },
  {
    text: 'Amazing service, worked with Brick on some projects that needed a professional and great design. Executed perfectly! 10/10 would recommend!',
    avatar: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fc_bs_revirew_L.png',
    name: 'Luca Stradman',
    role: 'CEO, NoBrands',
  },
  {
    text: 'Top notch agency with a team that knows how to strike the balance between pushing their own creativity and fulfilling their clients needs.',
    avatar: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78ff_bs_revirew_K_1.png',
    name: 'Gijs de Ranitz',
    role: 'Co-founder, Hittegolf-media',
  },
  {
    text: 'Without BRICK Socials we would not be who we are today. The place to be when you need consistency!',
    avatar: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fc_bs_revirew_L.png',
    name: 'Lucas Snoek',
    role: 'Founder/CEO, Social Training Club',
  },
  {
    text: 'The agency has a mix range of talented graphic designers, videographers and social media managers. Very hands on and amazing to work with!',
    avatar: 'https://cdn.prod.website-files.com/661fd630c0a9ac4bbd2a7878/661fd630c0a9ac4bbd2a78fe_bs_revirew_S.png',
    name: 'Shann Aceves',
    role: 'Manager, Tacos&Tequila',
  },
]

/* Triple arrays for seamless infinite loops */
const ROW1 = [...REVIEWS, ...REVIEWS, ...REVIEWS]
const ROW2 = [...[...REVIEWS].reverse(), ...[...REVIEWS].reverse(), ...[...REVIEWS].reverse()]

function Card({ item }) {
  return (
    <div className="tcard">
      <p className="tcard__text">"{item.text}"</p>
      <div className="tcard__author">
        <img src={item.avatar} alt={item.name} className="tcard__avatar" loading="lazy" />
        <div>
          <p className="tcard__name">{item.name}</p>
          <p className="tcard__role">{item.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="testi section-border-top" id="testimonials">

      {/* Header */}
      <div className="testi__header container" ref={ref}>
        <div className={`testi__header-inner reveal${inView ? ' in-view' : ''}`}>
          <h2 className="testi__title">The word on the street is …</h2>
          <p className="testi__sub">You can't just take our word for it. Our clients vow for us :)</p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="testi__track-wrap">
        <div className="testi__track testi__track--left">
          {ROW1.map((r, i) => <Card key={`r1-${i}`} item={r} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="testi__track-wrap">
        <div className="testi__track testi__track--right">
          {ROW2.map((r, i) => <Card key={`r2-${i}`} item={r} />)}
        </div>
      </div>

    </section>
  )
}
