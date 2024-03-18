import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
import './AuthDialog.css';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';




const instance=axios.create({
  baseURL:'http://localhost:8080/api/v1/bot'
})
// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Get the token from local storage
  const token = localStorage.getItem('access_token');

  // If the token exists, add it to the request headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  // If there's an error, reject the promise
  return Promise.reject(error);
});


const AuthDialog = ({ showDialog, setShowDialog }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [completeName, setCompleteName] = useState('');
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match when signing up
    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send a POST request to the correct endpoint based on whether the user is signing up or signing in
      const endpoint =  '/users/add' ;
      const response = await instance.post(endpoint, {
        username: email,
        password: password,
        completeName: isSignUp ? completeName : undefined, // Only include completeName when signing up
      });

      // If the request was successful, clear the error message and close the dialog
   if (response.status === 200) {

    localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);

     const decodedToken=jwtDecode(response.data.access_token)
     setUserData(decodedToken);

    setStatus(isSignUp ? 'Sign up successful' : 'Sign in successful');
    setError('');
    setShowDialog(false);
  } else {
    setError('An error occurred');
  }
    } catch (err) {
      // If the request failed, display the error message
      setError(err.message);
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
        {error && <p className="error">{error}</p>}
        {status && <p className="status">{status}</p>}
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
