import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
    <div className="contact-container">
        <h2>Thanks for playing!</h2>
        <h3>If you enjoyed the game please share this page. <br/> Also if you want you can contact me in the links below 😄</h3>
      <div>
            <ul className="list">
                <li><a href="https://linkedin.com/in/joaquin--franco"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/joafran"><i className="fab fa-github"></i></a></li>
                <li><a href="mailto:joafran0016@gmail.com"><i className="fas fa-envelope"></i></a></li>
                <li><a href=" https://wa.me/543644709383"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
      </div>
    </div>
    );
}

export default Contact;