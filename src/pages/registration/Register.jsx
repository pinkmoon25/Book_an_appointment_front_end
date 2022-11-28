import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from '../../components/Button';
import classes from './SignUp.module.css';
import CircleSpinner from '../spinners/CircleSpinner';


const SignUp = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successfullSignUp, setSuccessfullSignUp] = useState(false);
  const [user, setUser] = useState({});


  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/registrations', {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      email,
      password,
      
    })
  })
  .then(response => response.json())
  .then(data => {
    try{
      setUser({... JSON.parse(data.user)})
      setSuccessfullSignUp(true);
      toast.success('Successfully signed up');
      navigate('/login');
      console.log(user.username)
    }
    catch(err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  })
}


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
          <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
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
          <p>{console.log(user.username)}</p>
          
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/login" className={classes.link}>
              {' '}
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
