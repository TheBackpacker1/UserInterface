import { useState ,useEffect} from 'react';


import { Container,Typography,Button,Grid,Card,CardContent,CardMedia,AppBar,Toolbar,Menu,MenuItem,useMediaQuery,useTheme, } from '@mui/material'
import axios from 'axios'
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';


const API_URL = 'https://api.coinranking.com/v2/coins';
const COINS = ['bitcoin', 'ethereum', 'tether', 'bnb', 'usdt'];

const useStyles = makeStyles((theme) => ({

  appBar: {
    backgroundColor: '#111111', // Dark background
    color: '#ffffff', // White text
  },
  appBarTitle: {
    flexGrow: 1, // Use flexbox to grow and push content to the right
  },
  navLink: {
    color: '#ffffff', // White text
    textDecoration: 'none', // Remove underline from links
    marginRight: theme.spacing(2), // Add spacing between links
  },
  navMenuIcon: {
    marginLeft: 'auto', // Move icon to the left side
    marginRight: -theme.spacing(2), // Add spacing from the right edge
    color: '#ffffff', // White text
  },
  navMenu: {
    // ... styles for the menu itself (optional)
  },

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
  const [anchorEl,setAnchorEl]=useSate(null)
  const theme = useTheme() 
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
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

   <Container  > 
     <AppBar position="static" className={classes.appBar}>

      <Toolbar>     
      <Typography variant="h6" component="div" className={classes.appBarTitle}>
          Investi 
        </Typography>       
          {  isMobile ?  (
            
            <IconButton   
            aria-label="account of current user"
            aria-controls="account-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            className={classes.navMenuIcon}>





            <MenuIcon />
            </IconButton>




          ) 
        
        
        
        
        
        } 
          
           </Toolbar>  






     </AppBar>







   </Container>


   
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
