import { useState,useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
import {Message} from 'primereact/message'
import './AuthDialog.css';
import axios from 'axios';


const instance=axios.create({
  baseURL:'http://localhost:8080/api/v1/bot',
  headers: { 'Content-Type': 'application/json' } // Add Content-Type header

})



const AuthDialog = ({ showDialog, setShowDialog }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [completeName, setCompleteName] = useState('');
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [token, setToken] = useState(''); // State variable for token


  const storeToken = (token) => {
    try {
      localStorage.setItem('auth_token', token);
    } catch (error) {
      console.error('Error storing token in local storage:', error);
      // Handle storage errors gracefully
    }
  };
  
  const retrieveToken = () => {
    try {
      const storedToken = localStorage.getItem('auth_token');
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Error retrieving token from local storage:', error);
    }
  };

  useEffect(() => {
    retrieveToken();


    if (!showDialog || (status && error)) { // Clear on close or both messages set
      setStatus('');
      setError('');
    }
  }, [showDialog, status, error]);


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    // Check if passwords match when signing up
    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (isSignUp) {
   // Signup logic
        const endpoint = '/users/add'; // Replace with your signup endpoint

        const userData={
          username: email,
          password: password,
          completeName: completeName,
          status: "Active",
          rolePayloads: [
            {
              roleId: 2, // Assuming role ID is statically set
              name: "user",
            }
          ]
        }
        
        
        const response = await instance.post(endpoint, JSON.stringify(userData));
          storeToken

        if (response.status === 200) { // Assuming 200 for successful creation
          setStatus('Sign up successful');
          setError('');
        }else {
          if (response.data) {
            const errorData = await response.json();
            setError(errorData.message || 'User could not be created. Please check details and try again.');
          } else {
            setError('An unexpected error occurred. Please try again.');
          }

        }
      } else {
        // Login logic

     
        const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);



        const endpoint = 'http://localhost:8080/api/v1/bot/token'; // Use the provided token endpoint

        const response = await axios.post(endpoint,formData);

        
    if (response.status === 200) { // Assuming 200 for successful login
      if (response.data && response.data.access_token && response.data.refresh_token) { // Check for token in response data
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        setToken(accessToken );
        storeToken(accessToken )  

           setToken(refreshToken );
        storeToken(refreshToken ) 
        //console.log(accessToken)

        instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken }`;
        setStatus('Login successful!');
        setError('');
       // setShowDialog(false); // Close dialog after successful login
      } else {
        console.error('Token not found in response', response.data);
        setError('An error occurred. No token received.');
      }
    } else {
      if (response.data) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please check your credentials and try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }

      }
    } catch (error) {

      setError(error.message || 'An error occurred while processing your request.');
    }
    finally {
      // Clear messages after 4 seconds
      setTimeout(() => {
        setStatus('');
        setError('');
      }, 4000);
    }
  };



  const renderForm = () => (
    <div className='auth-dialog'>
      <h3>{isSignUp ? 'Sign Up' : 'Sign In'}</h3>
      <form onSubmit={handleSubmit}> 
        {isSignUp && (
          <div className="p-field">
            <label htmlFor="completeName">Complete Name</label>
            <InputText id="completeName" type="text" value={completeName} onChange={(e) => setCompleteName(e.target.value)} /> {/* Bind value and onChange */}
          </div>
        )}
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Bind value and onChange */}
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> {/* Bind value and onChange */}
        </div>
        {isSignUp && (
          <div className="p-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <InputText id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> {/* Bind value and onChange */}
          </div>
        )}
        {status && <Message severity="success" text={status} className="status-message" />}
        {error && <Message severity="error" text={error} className="error-message" />}
        {
          !isSignUp && (
            <p className='forgot-password'><a href="#">Forgot password?</a></p>
          )
        }
        <Button type="submit" label={isSignUp ? 'Sign Up' : 'Sign In'} className='auth-button' /> {/* Set type to "submit" */}
        {isSignUp ? (
          <p>If you already have an account, please <a href="#" onClick={() => setIsSignUp(false)}>sign in</a></p>
        ) : (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>If you don't have an account, please <a href="#" onClick={() => setIsSignUp(true)}>sign up</a></p>
        )}
      </form> 
    </div>
  );
    return (
      <Dialog visible={showDialog} onHide={() => setShowDialog(false)}>
        {renderForm()}
      </Dialog>
    );
  }
  AuthDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    setShowDialog: PropTypes.func.isRequired,
  };

export default AuthDialog;