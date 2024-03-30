import {createContext ,useState,useEffect} from 'react'
import PropTypes from 'prop-types';



const AuthContext = createContext({
isAuthenticated:false,
setIsAuthenticated: () =>{},
onLogout: () => {},
setUser: () => {}, // Define setUser function here


})


const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null); // Initialize user state

    const retrieveToken = async () => {
      try {
        const storedToken = localStorage.getItem('auth_token');
        if (storedToken) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error retrieving token from local storage:', error);
      }
  };

  const handleLogout = () => {
  try {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  } catch (error) {
    console.error('Error clearing token from local storage:', error);
  }
  };



  useEffect(() => {
    retrieveToken();
  }, []);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    onLogout: handleLogout,
    setUser, // Provide setUser as a context value

  };
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };
  

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  export { AuthContext, AuthProvider };


