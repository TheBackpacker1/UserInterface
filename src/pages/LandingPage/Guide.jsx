import { Button } from 'primereact/button'
import { Card } from 'primereact/card'


import { FaUser, FaSearchDollar, FaStar } from 'react-icons/fa'


import './Guide.css'





const Guide = () => {
  return (
    <div className='guide-section'>

      <div className='guide-header'>
        <h2>How to Get Started</h2>
        <p>Follow these simple steps to begin your cryptocurrency investment journey</p>
        <Button label="Get Started" className="cta-button" />
      </div>

      <div className="guide-steps">

        <Card className="guide-card">
          <div className="icon-wrapper">
            <FaUser className="step-icon" />
          </div>
          <div className="step-content">
            <h4>Create Your Account</h4>
            <p>Secure your personal information and access all our features.</p>
          </div>
        </Card>


        <Card className="guide-card">
          <div className="icon-wrapper">
            <FaSearchDollar className="step-icon" />
          </div>
          <div className="step-content">
            <h4>Start Searching Coins</h4>
            <p>Explore and search for trending and emerging cryptocurrencies.</p>
          </div>
        </Card>

        <Card className="guide-card">
          <div className="icon-wrapper">
            <FaStar className="step-icon" />
          </div>
          <div className="step-content">
            <h4>Save Your Favorite Coins</h4>
            <p>Mark the coins you want to track and start building your investment strategy.</p>
          </div>
        </Card>


      </div>

    </div>
  )
}

export default Guide