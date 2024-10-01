
import { Button } from 'primereact/button';
import { Image } from 'primereact/image'; 
import CryptoImage from '../../assets/crypto1.jpeg'
import './HeroSection.css'
const HeroSection = () => {
  return (
<div className="hero-section  ">
<div className="hero-content">
        <h1>Empower Your Crypto Investment Journey</h1>
        <p>At CryptoInvest, we provide the tools and insights to help investors make informed decisions when buying and selling cryptocurrency. Access valuable analytics and trends to navigate the dynamic world of crypto confidently.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
    
)
}

export default HeroSection