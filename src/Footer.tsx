// Footer.tsx

import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Add this to your main stylesheet or component



const Footer: React.FC = () => (
  <footer className="footer-container">
    <div className="contact-info">
    <p><strong>Connect with me:</strong></p>
      <p>Email: watsanna@kean.edu</p>
      <p>Phone: (973) 905-0697</p>
      
     {/* LinkedIn */}
     <a href="https://www.linkedin.com/in/annaliese-watson-636018253/" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

<a> </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/lijahara/" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    <p>&copy; 2023 Annaliese Watson's Website. All rights reserved.</p>
  </footer>
);

export default Footer;
