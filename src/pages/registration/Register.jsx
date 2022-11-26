import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Button from '../../components/Button';
import classes from './SignUp.module.css';
import CircleSpinner from '../spinners/CircleSpinner';

const SignUp = () => {
  // const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successfullSignUp, setSuccessfullSignUp] = useState(false);


  const signUpButtonContent = () => {
    if (!loading && !successfullSignUp) {
      return 'Sign Up';
    }
    if (successfullSignUp) {
      return 'Account Created!';
    }
    return <CircleSpinner />;
  };

  useEffect(() => {
    setErrorMessage('');
  }, [password]);

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/registrations',
        method: 'POST',
        data: {
          username,
          email,
          password,
        },
      });
      setLoading(false);
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }
      setSuccessfullSignUp(true);
      setInterval(() => {
        // navigate('/login');
      }, 1500);
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  };

  return (
    <section className={classes.signupSection}>
      <div className={classes.sectionContainer}>
        <div className={classes.heading}>
          <h2>Sign Up</h2>
        </div>
        <div className="errors">
         <span className={classes.errorMsg}>{errorMessage}</span>
        </div>
        <div className={classes.formContainer}>
          <form onSubmit={(e) => registerUser(e)} className={classes.form}>
           <div className={classes.formGroup}>
            <Form.Label className={classes.inputLabel}>Name</Form.Label>
           <br />
            <Form.Control
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
          <Form.Label className={classes.inputLabel}>Email Address</Form.Label>
          <br />
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
          <Form.Label className={classes.inputLabel}>Password</Form.Label>
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
            id="sign-up-btn"
          >
            {signUpButtonContent()}
          </Button>
          </form>
        </div>
        <div>
          <p>
            Already have an account?
            {/* <Link to="/login" className={classes.link}>
              {' '}
              Login
            </Link> */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
