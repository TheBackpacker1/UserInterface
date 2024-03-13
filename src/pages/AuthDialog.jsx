import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

const AuthDialog = ({showDialog, setShowDialog}) => {
  const [isSignUp, setIsSignUp] = useState(false); // state to toggle between sign up and sign in

  const renderForm = () => (
    <div className=''>
      <h3>{isSignUp ? 'Sign Up' : 'Sign In'}</h3>
      {isSignUp && (
        <div className="p-field">
          <label htmlFor="completeName">Complete Name</label>
          <InputText id="completeName" type="text" />
        </div>
      )}
      <div className="p-field">
        <label htmlFor="email">Email</label>
        <InputText id="email" type="email" />
      </div>
      <div className="p-field">
        <label htmlFor="password">Password</label>
        <InputText id="password" type="password" />
      </div>
      {isSignUp && (
        <div className="p-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputText id="confirmPassword" type="password" />
        </div>
      )}
      { 
      !isSignUp && (
       <p style={{textDecoration:'none', color:'white'}}><a href="#">Forgot password?</a></p>

      )
      
      }
      <Button label={isSignUp ? 'Sign Up' : 'Sign In'} />
      {isSignUp ? (
        <p>If you already have an account, please <a href="#" onClick={() => setIsSignUp(false)}>sign in</a>.</p>
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>If you don't have an account, please <a href="#" onClick={() => setIsSignUp(true)}>sign up</a>.</p>
      )}
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
