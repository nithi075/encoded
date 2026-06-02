import { motion } from 'framer-motion';
import './WeddingStory.css';

// Import your images
import proposalImage from '../../assets/story1.jpg';
import weddingImage from '../../assets/story2.jpg';

const WeddingStory = () => {
  return (
    <section className="wedding-story-section">

      <h2 className="section-title">
        THE BEGINNING
      </h2>

      {/* Story Item 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="story-wrapper"
      >

        <div className="story-image">
          <img src={proposalImage} alt="Proposal" />
        </div>

       <div className="story-content">
  <span className="story-date">
    BRIDAL PHOTOGRAPHY
  </span>

  <h3>TIMELESS BRIDAL ELEGANCE</h3>

  <p>
    Every smile, every glance, and every beautiful detail is captured with care,
    preserving the grace, confidence, and beauty of your special day in timeless photographs
    that you'll cherish forever.
  </p>
</div>

      </motion.div>

      {/* Story Item 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="story-wrapper reverse"
      >

        <div className="story-image">
          <img src={weddingImage} alt="Wedding Day" />
        </div>

        <div className="story-content">
          <span className="story-date">
            MAY 22, 2026
          </span>

          <h3>THE CELEBRATION</h3>

          <p>
            Surrounded by family and the warmth of a lifetime of memories,
            we exchanged vows that mirrored the beauty of the landscape we chose to call home.
          </p>
        </div>

      </motion.div>

    </section>
  );
};

export default WeddingStory;