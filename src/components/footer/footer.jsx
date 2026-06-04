import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">MAGIC MOMENTZ</h2>
        <a href="mailto:hello@magicmomentz.com" className="footer-contact">
          HELLO@MAGICMOMENTZ.COM
        </a>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">PINTEREST</a>
          <a href="#">VIMEO</a>
        </div>
        <p className="copyright">© 2026 MAGIC MOMENTZ. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
