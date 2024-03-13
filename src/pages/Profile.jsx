import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Profile = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // state to toggle between sign up and sign in

  const renderForm = () => (
    <div>
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
      <Button label={isSignUp ? 'Sign Up' : 'Sign In'} />
      {!isSignUp && (
        <p>Forgot your password? <a href="#">Reset it</a>.</p>
      )}
      {isSignUp ? (
        <p>If you already have an account, please <a href="#" onClick={() => setIsSignUp(false)}>sign in</a>.</p>
      ) : (
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
export default Profile;