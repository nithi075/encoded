import useInView from '../useInView'
import './Gallery.css'

import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.jpg'
import img4 from '../../assests/img4.jpg'

import video1 from '../../assests/video1.mp4'
import video2 from '../../assests/video2.mp4'
import video3 from '../../assests/video3.mp4'
import video4 from '../../assests/video4.mp4'
import video5 from '../../assests/video5.mp4'

const ITEMS = [
  { type: 'video', src: video1, alt: 'Project Video 1', span: 'tall' },
  { type: 'image', src: img1, alt: 'Project Image 1', span: 'normal' },
  { type: 'image', src: img2, alt: 'Project Image 2', span: 'normal' },

  { type: 'video', src: video3, alt: 'Project Video 3', span: 'normal' },
  { type: 'image', src: img3, alt: 'Project Image 3', span: 'tall' },
  { type: 'video', src: video4, alt: 'Project Video 4', span: 'wide' },
  { type: 'image', src: img4, alt: 'Project Image 4', span: 'normal' },

  { type: 'video', src: video5, alt: 'Project Video 5', span: 'tall' },
]

export default function Gallery() {
  const [ref, inView] = useInView(0.05)

  return (
    <section className="gallery section-border-top" id="gallery" ref={ref}>
      <div className="container">

        <div className={`gallery__header reveal${inView ? ' in-view' : ''}`}>
          <h2 className="gallery__title">Our Work 🎨</h2>
          <p className="gallery__sub">
            A glimpse of the content we've created for our clients across industries.
          </p>
        </div>

        <div
          className={`gallery__grid reveal${inView ? ' in-view' : ''}`}
          style={{ transitionDelay: '0.1s' }}
        >
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery__cell gallery__cell--${item.span}`}
              style={{
                transitionDelay: inView ? `${i * 0.055}s` : '0s',
              }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              )}

              <div className="gallery__overlay">
                <span className="gallery__label">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}