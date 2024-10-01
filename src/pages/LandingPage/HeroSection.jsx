
import { Button } from 'primereact/button';
import { Image } from 'primereact/image'; 
import CryptoImage from '../../assets/crypto1.jpeg'
import './HeroSection.css'
const HeroSection = () => {
  return (
<div className="hero-section  ">
<div className="hero-content">
        <h1>Start and Build Your Crypto Portfolio Here</h1>
        <p>Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
    
)
}

export default HeroSection