import { motion } from "framer-motion";
import "./About.css";

// Import your image
import aboutImage from "../../assets/about1.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          {/* <img
            src={aboutImage}
            alt="Swaathy Artistry"
            className="about-photo"
          /> */}
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="about-content"
        >
          <p className="quote">
            "Enhancing beauty with elegance and artistry."
          </p>

          <h2 className="about-title">
            THE ARTIST BEHIND THE BRUSH
          </h2>

          <p className="about-text">
            With a passion for bridal beauty and luxury styling,
            I create timeless looks that enhance your natural
            features while reflecting your unique personality.
            Every makeover is carefully tailored to make you feel
            confident, radiant, and unforgettable on your special day.
          </p>

          <button className="about-btn">
            Read My Full Journey
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;