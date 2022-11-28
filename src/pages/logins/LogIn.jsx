import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import classes from './LogIn.module.css';
import CircleSpinner from '../spinners/CircleSpinner';

const LogIn = () => {
//   const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const logInButtonContent = () => {
    if (!loading) {
      return 'Log In';
    }
    return <CircleSpinner />;
  };

  const loginUser = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/sessions', {
  method: "POST",
  headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username,
    password,
    
  })
})
.then(response => response.json())
.then(data => {
    // setUser({... JSON.parse(data.user)})
    // sessionStorage.setItem(data);
    if(data.status === 401){
      setErrorMessage('Username/Password Incorrect')
    } else{
      setErrorMessage('Signedin seuccessfully')
    }

})
}


  return (
    <section className={classes.sessionForm}>
    <div className={classes.sessionContainer}>
    <p className={classes.errorMsg}>{errorMessage}</p>
        <div className={classes.formContainer}>
        <Form onSubmit={(e) => loginUser(e)} className={classes.form}>
        <div className={classes.heading}>
              <h1>Login</h1>
              </div>
            <div className={classes.formGroup}>
            <Form.Label>Username</Form.Label>
            <br />
            <Form.Control
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            variant="primary"
            type="submit"
            className={classes.submit_btn}
          >
            {logInButtonContent()}
          </Button>
          </Form>
        </div>
        <div>
          <p>
            Don&apos;t have an account yet?
            {/* <Link to="/register" className={classes.link}>
              Register
            </Link> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogIn;