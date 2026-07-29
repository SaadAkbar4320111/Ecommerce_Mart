import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2>ZA Mart</h2>
          <p>
            Fresh groceries delivered to your doorstep with quality,
            affordability, and convenience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Multan, Pakistan</p>
          <p>📧 support@zamart.com</p>
          <p>📞 +92 300 1234567</p>
        </div>

        {/* Social */}
        <div className="footer-section social-section">
    <h3>Follow Us</h3>

    <div className="social-icons">
        <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaFacebookF />
        </a>

        <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaInstagram />
        </a>

        <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedinIn />
        </a>
    </div>
</div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p>© 2026 ZA Mart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;