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

  // eslint-disable-next-line no-unused-vars


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    // Check if passwords match when signing up
    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (isSignUp) {
        // No token retrieval needed for signup (assuming server allows it)

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


        const tokenEndpoint = 'http://localhost:8080/api/v1/bot/token'; // Use the provided token endpoint
        const loginData = {
          username: email,
          password: password,
        };
        const tokenResponse = await axios.post(tokenEndpoint, JSON.stringify(loginData));

        if (tokenResponse.status === 200) { // Assuming 200 for successful token retrieval
          const token = tokenResponse.data.token; // Replace with your token extraction logic
          setToken(token);

          // Set the Authorization header with the retrieved token for subsequent requests
          instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          setStatus('Login successful!');
          setError('');
          setShowDialog(false); // Close dialog after successful login
        } else {
          // Check if the response is JSON-compatible before parsing
          if (tokenResponse.data) {
            const errorData = await tokenResponse.data;
            setError(errorData.message || 'Invalid credentials. Please try again.');
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
  useEffect(() => {
    if (!showDialog || (status && error)) { // Clear on close or both messages set
      setStatus('');
      setError('');
    }
  }, [showDialog, status, error]);



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