import {createContext ,useState} from 'react'
import PropTypes from 'prop-types';



const AuthContext = createContext({

isAuthenticated:false,
setIsAuthenticated: () =>{},


})


const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
  };
  

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  export { AuthContext, AuthProvider };


