import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import classes from './LogIn.module.css';
import CircleSpinner from '../spinners/CircleSpinner';

const LogIn = () => {
//   const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const logInButtonContent = () => {
    if (!loading) {
      return 'Log In';
    }
    return <CircleSpinner />;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/logins',
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }
      sessionStorage.setItem(data);
    //   navigate('/');
    } catch (err) {
      setLoading(false);
      const apiErrorMessages = {
        emailErr: 'User with provided email not found!',
        passwordErr: 'Incorrect password provided!',
      };
      const { error } = err.response.data;
      if (error.match("Couldn't find User with...")) {
        setErrorMessage(apiErrorMessages.emailErr);
      } else {
        setErrorMessage(apiErrorMessages.passwordErr);
      }
    }
  };

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
            <Form.Label>Email Address</Form.Label>
            <br />
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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