import { motion } from 'framer-motion';
import './Gallery.css';

// Import your gallery images
import gallery1 from '../../assets/gal1.jpg';
import gallery2 from '../../assets/gal2.jpg';
import gallery3 from '../../assets/gal3.jpg';
import gallery4 from '../../assets/gal4.jpg';
import gallery5 from '../../assets/gal5.jpg';
import gallery6 from '../../assets/gal6.jpg';

const Gallery = () => {

  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (

    <section className="gallery-section">

      <h2 className="section-title">
        VISUAL NARRATIVES
      </h2>

      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/wedding_by_.arun/"
        target="_blank"
        rel="noopener noreferrer"
        className="insta-link"
      >
        @wedding_by_.arun
      </a>

      {/* Gallery Grid */}
      <div className="gallery-grid">

        {images.map((img, i) => (

          <motion.div
            key={i}
            className="gallery-item"

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              delay: i * 0.1
            }}

            viewport={{ once: true }}
          >

            <div className="image-placeholder">
              <img src={img} alt={`Gallery ${i + 1}`} />
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Gallery;