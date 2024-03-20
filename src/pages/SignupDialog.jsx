import  { useState,useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import LoginDialog from './LoginDialog'
import './AuthDialog.css';

const SignupDialog = ({ showDialog, setShowDialog }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [completeName, setCompleteName] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found');
        return;
      }

      const response = await axios.post('/users/add', {
        username: email,
        password: password,
        completeName,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);

        const decodedToken = jwtDecode(response.data.access_token);
        setUserData(decodedToken);

        setStatus('Sign up successful');
        setError('');
        setShowDialog(false);
      } else {
        setError('An error occurred');
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setError('Unauthorized access. Please check your credentials.');
      } else {
        setError('An error occurred while processing your request.');
      }
    }
  };

  useEffect(() => {
    if (!showDialog) {
      setEmail('');
      setPassword('');
      setError('');
      setStatus('');
    }
  }, [showDialog]);


  const renderForm = () => (
    <div className='auth-dialog'>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label htmlFor="completeName">Complete Name</label>
          <InputText id="completeName" type="text" value={completeName} onChange={(e) => setCompleteName(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputText id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {error && <p className="error">{error}</p>}
        {status && <p className="status">{status}</p>}
        <Button type="submit" label="Sign Up" className='auth-button' />
        <p>If you already have an account, please <a href="#" onClick={() => setShowDialog(true,LoginDialog)}>LogIn</a></p>
      </form>
    </div>
  );

  return (
    <Dialog visible={showDialog} onHide={() => setShowDialog(false)}>
      {renderForm()}
    </Dialog>
  );
};

SignupDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    setShowDialog: PropTypes.func.isRequired,
  };

export default SignupDialog;