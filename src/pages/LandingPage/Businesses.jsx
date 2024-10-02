import './Businesses.css';
import { Card } from 'primereact/card';

const Businesses = () => {

 const features = [

   

    {
        title: "Best Analytics",
        description: "Get top-tier analytics for a wide range of cryptocurrencies, with insights updated regularly.",
        icon: "pi pi-chart-line",
      },
      {
        title: "Real-time Updates",
        description: "Track real-time data and market trends to stay ahead in your investment decisions.",
        icon: "pi pi-clock",
      },
      {
        title: "User-Friendly Dashboard",
        description: "Easily control and manage your work with a streamlined dashboard designed for efficiency and simplicity",
        icon: "pi pi-desktop",
      },
      {
        title: "Learning Best Practices",
        description: "Access educational resources on crypto trading, and learn when to buy and sell with confidence.",
        icon: "pi pi-book",
      },
      {
        title: "Performance Tracking",
        description: "Visualize your assets' past and current performance using our integrated charting tools.",
        icon: "pi pi-chart-bar",
      },


 ]









  return (
    <div className="businesses-section">
   <h2>Our Services & Dashboard Tools</h2>
   <p className="services-subtitle">Explore sensational features to prepare your best investment in cryptocurrency</p>

   <div className="feature-card-container">

   {features.map((feature, index) => (
          <Card key={index} style={{ width: '300px', margin: '20px' }} className="feature-card">
            <div className="feature-icon">
              <i className={feature.icon} style={{ fontSize: '2rem', color: '#26A69A' }}></i>
            </div>
            <div className="feature-title">{feature.title}</div>
            <div className="feature-description">{feature.description}</div>
          </Card>
        ))}



   </div>

    </div>
  )
}

export default Businesses