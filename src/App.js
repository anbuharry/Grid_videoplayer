import React, { useState, useEffect } from 'react';
import './App.css';
import fb from './firebase';
import './App.css';
//Components
import Login from './components/Login';
import Hero from './components/Hero';

function App() {

  //States
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  //Login function
  const handleLogin = () => {
    clearErrors();
    fb.auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {

    })
  }

  //Signup function
  const handleSignup = () => {
    clearErrors();
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        
      })
  }

  //Function for logout
  const handleLogout = () => {
    fb.auth().signOut();
  }

  //Authentication listener
  const authListener = () => {
    fb.auth().onAuthStateChanged(user => {
      if ( user ){
        clearInputs();
        setUser(user);
      } else { setUser('') }
    })
  }

  //React listener.
  useEffect(() => {
    authListener();
  },);

  return (
    <div className="App">
      { user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
      )}
    </div>
  );
}

export default App;
