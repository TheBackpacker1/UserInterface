import {useState} from 'react'
import { Button } from 'primereact/button';

import AuthDialog from '../AuthDialog';

import './HeroSection.css'

const HeroSection = () => {

const [showDialog , setShowDialog]=useState(false) 
// eslint-disable-next-line no-unused-vars
const [isAuthenticated, setIsAuthenticated]=useState(false)


const handleGetStarted = () => {
  setShowDialog(true);
};

const onLoginSuccess = () => {
  console.log('Login successful!');
};

  return (
<div className="hero-section  ">
<div className="hero-content">
        <h1>Empower Your Crypto Investment Journey</h1>
        <p>At CryptoInvest, we provide the tools and insights to help investors make informed decisions when buying and selling cryptocurrency. Access valuable analytics and trends to navigate the dynamic world of crypto confidently.
        </p>
        <Button className="cta-button" onClick={handleGetStarted}>Get Started</Button>




        <AuthDialog
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          onLoginSuccess={onLoginSuccess}
          setIsAuthenticated={setIsAuthenticated}
          isSingup={true}
        />

      </div>
    </div>
    
)
}

export default HeroSection