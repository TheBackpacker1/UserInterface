import { useState ,useEffect} from 'react';


import { Container,Typography,Button,
  Grid,
  Card,
  CardContent,
  CardMedia, } from '@mui/material'
import axios from 'axios'
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const API_URL = 'https://api.coinranking.com/v2/coins';
const COINS = ['bitcoin', 'ethereum', 'tether', 'bnb', 'usdt'];

const useStyles = makeStyles((theme) => ({
  heroSection: {
    textAlign: 'center',
    marginTop: '4rem',
    marginBottom: '4rem',
    backgroundColor: '#111111', // Dark background
    color: '#ffffff', // White text
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  heroButton: {
    backgroundColor: '#3498db', // Blue background
    color: '#ffffff', // White text
  },
  marketTrendSection: {
    marginTop: '4rem',
  },
  coinCard: {
    backgroundColor: '#222222', // Dark background
    color: '#ffffff', // White text
  },
  coinCardMedia: {
    height: '140px',
  },
  coinCardTitle: {
    fontSize: '1.2rem',
  },
  coinCardPrice: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  coinCardChange: {
    fontSize: '1.1rem',
    color: 'green', // Green for positive change
  },
}));
const LandingPage = () => { 
  const classes = useStyles();
  const [coins , setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 

      setError(null);

      try {
        const 
 coinDataPromises = COINS.map(async (coin) => {
          const response = await axios.get(`${API_URL}/${coin}`);
          if (!response.statusText === 'OK') {
            throw new Error(`Failed to fetch data for ${coin}: ${response.status}`);
          }
          return response.data.data;
        });

        const coinData = await Promise.all(coinDataPromises);
        setCoins(coinData);
      } catch (error) {
        console.error('Error fetching coin data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <Container maxWidth="md">
    {/* Navigation Bar */}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Businesses</a></li>
          <li><a href="#">Trade</a></li>
          <li><a href="#">Market</a></li>
          <li><a href="#">Learn</a></li>
        </ul>
      </nav>  
      
      {/* Hero Section */}
      <div className={classes.heroSection}>
        <Typography variant="h1">CryptoCap</Typography>
        <Typography variant="h2">Start and Build Your Crypto Portfolio Here</Typography>
        <Typography variant="body1">
          Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.
        </Typography>
        <Button variant="contained" color="primary" size="large">Get Started</Button>
      </div>

      

      {/* Market Trend Section */}
      <Grid container spacing={2} className={classes.marketTrendSection}>
        {coins.map((coin, index) => (
          <CoinCard key={index} coin={coin} />
        ))}
      </Grid>
    </Container>
  );
};

const CoinCard = ({ coin }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Card  className={classes.coinCard}>
        <CardMedia
          component="img"
          height="140"
          image={coin.iconUrl} 
          alt={coin.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.coinCardTitle}>
            {coin.symbol} ({coin.name})
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Price: ${coin.price}
            <br />
            Change: {coin.change}%
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )

  }
    CoinCard.propTypes = {
      coin: PropTypes.shape({
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        change: PropTypes.number.isRequired,
        iconUrl: PropTypes.string.isRequired,
      }).isRequired,
  
  


};
export default LandingPage;
