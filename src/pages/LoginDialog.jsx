/* eslint-disable react/no-unescaped-entities */
import  { useState ,useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import  './AuthDialog.css'

const LoginDialog = ({ showDialog, setShowDialog }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual login API endpoint
      const response = await axios.post('/users/login', {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);

        const decodedToken = jwtDecode(response.data.access_token);
        setUserData(decodedToken);

        setStatus('Login successful');
        setError('');
        setShowDialog(false);
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid credentials');
      } else {
        setError('An error occurred while processing your request.');
      }
    }
  };


  useEffect(() => {
    if (userData) {
      console.log('Login successful, user data:', userData);
      // Perform other side effects here (e.g., redirect to a different page)
    }
  }, [userData]); // Run only when userData changes

  const renderForm = () => (
    <div className='auth-dialog'>
      <h3>LogIn</h3>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error">{error}</p>}
        {status && <p className="status">{status}</p>}
        <Button type="submit" label="LogIn" className='auth-button' />
        <p className='forgot-password'><a href="#">Forgot password?</a></p>
        <p>If you don't have an account, please <a href="./signupDialog" onClick={() => setShowDialog(true)}>sign up</a></p>
      </form>
    </div>
  );

  return (
    <Dialog visible={showDialog} onHide={() => setShowDialog(false)}>
      {renderForm()}
    </Dialog>
  );
};

LoginDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
};
export default LoginDialog;