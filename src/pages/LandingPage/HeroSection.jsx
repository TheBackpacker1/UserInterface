
import { Button } from 'primereact/button';
import { Image } from 'primereact/image'; // Using PrimeReact's Image component
import CryptoImage from '../../assets/crypto1.jpeg'

const HeroSection = () => {
  return (
<div className="hero-section bg-gradient-to-b from-cyan-500 to-teal-500 text-white p-16 "

>

  
      <h2 className="p-text-bold text-4xl font-bold mb-3" >Start and Build Your Crypto Portfolio Here</h2>
      <p className="text-lg">Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
      <Button className="primary-button">Get Started</Button>
    </div>
    
)
}

export default HeroSection