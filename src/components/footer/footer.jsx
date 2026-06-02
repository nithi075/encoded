import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">WEDDING BY ARUN</h2>
        <a href="mailto:hello@weddingbyarun.com" className="footer-contact">
          HELLO@WEDDINGBYARUN.COM
        </a>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">PINTEREST</a>
          <a href="#">VIMEO</a>
        </div>
        <p className="copyright">© 2026 WEDDING BY ARUN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;