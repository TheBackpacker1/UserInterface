import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        We are a platform dedicated to helping investors make informed cryptocurrency
                        decisions with the latest analytics, news, and trends.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Stay updated with the latest news and trends in the cryptocurrency world.</p>
                    <div className="newsletter">
                        <InputText placeholder="Enter your email" className="newsletter-input" />
                        <Button label="Subscribe" icon="pi pi-envelope" className="newsletter-btn" />
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Connect with us on social media:</p>
                    <div className="social-icons">
                        <Button icon="pi pi-facebook" className="p-button-rounded p-button-info" aria-label="Facebook" />
                        <Button icon="pi pi-twitter" className="p-button-rounded p-button-info" aria-label="Twitter" />
                        <Button icon="pi pi-linkedin" className="p-button-rounded p-button-info" aria-label="LinkedIn" />
                        <Button icon="pi pi-instagram" className="p-button-rounded p-button-info" aria-label="Instagram" />
                    </div>
                </div>
            </div>
            <Divider />
            <div className="footer-bottom">
                <p>© 2024 CryptoInvest. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
