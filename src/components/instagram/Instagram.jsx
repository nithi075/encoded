import React from "react";
import "./Instagram.css";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";

/* Import images */
import insta1 from "../../assets/instagram/img1.jpg";
import insta2 from "../../assets/instagram/img2.jpg";
import insta3 from "../../assets/instagram/img3.jpg";
import insta4 from "../../assets/instagram/img4.jpg";
import insta5 from "../../assets/instagram/img5.jpg";
import insta6 from "../../assets/instagram/img6.jpg";

const Instagram = () => {
  // Array of objects use pannuna 'key' management easy-ah irukkum
  const posts = [
    { id: 1, img: insta1 },
    { id: 2, img: insta2 },
    { id: 3, img: insta3 },
    { id: 4, img: insta4 },
    { id: 5, img: insta5 },
    { id: 6, img: insta6 },
  ];

  return (
    <section className="insta-compact-section">
      {/* Header */}
      <div className="insta-header-minimal">
        <span className="insta-mini-tag">FOLLOW OUR STORY</span>
        <h3>@magic_momentz_2023</h3>
      </div>

      {/* Wrapper */}
      <div className="insta-wrapper-small">
        <div className="insta-scroll-container">
          {posts.map((post) => (
            <div key={post.id} className="insta-card-box">
              {/* Image Frame */}
              <div className="insta-img-frame">
                <img
                  src={post.img}
                  alt={`Jeeva Photography Post ${post.id}`}
                  loading="lazy" 
                />
              </div>

              {/* Actions */}
              <div className="insta-card-actions">
                <div className="left-actions">
                  <FaRegHeart className="insta-icon heart" />
                  <FaRegComment className="insta-icon" />
                </div>
                <div className="right-actions">
                  <FaRegBookmark className="insta-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="insta-footer-link">
        <a
          href="https://www.instagram.com/magic_momentz_2023/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Instagram;