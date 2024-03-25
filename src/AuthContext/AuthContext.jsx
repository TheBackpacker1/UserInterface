import {createContext ,useState,useEffect} from 'react'
import PropTypes from 'prop-types';



const AuthContext = createContext({
isAuthenticated:false,
setIsAuthenticated: () =>{},
onLogout: () => {},

})


const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state

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


