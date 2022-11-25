import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { signupUser } from '../redux/register/register';
import Input from '../components/Input';
import Button from '../components/Button';

const SignupForm = () => {

  const [loader, setLoader] = useState('Please wait...');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  const myData = useSelector((state) => state.registerReducer, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(emailRef.current.value)) {
      errors.message = 'This is not a valid email format!';
      emailRef.current.focus();
    }
    if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 40) {
      errors.message = 'The password must be between 6 and 40 characters';
      passwordRef.current.focus();
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      errors.message = 'The passwords do not match!';
      passwordConfirmRef.current.focus();
    }
    return errors;
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate);
    setIsSubmit(true);

    const userData = { user };
    dispatch(signupUser(userData));

    setIsLoading(!isLoading);

    if ((isLoading === true && myData.status !== 200) || myData.user.error) {
      setTimeout(() => {
        setLoader('Try Again');
      }, 1000);
    }

    if ((isLoading === false && myData.status !== 200) || myData.user.error) {
      setLoader('Please wait...');
      setTimeout(() => {
        setLoader('Try Again');
      }, 2000);
    }
  };

  if (myData.status === 200) {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }

  const handleFailure = () => {
    if (myData.user.error) {
      return myData.user.error;
    }
    if (myData.status === 401) {
      const text = 'Email Already Exist';
      return text;
    }
    return errors.message;
  };

  return (
    <section className={style.signupSection}>
      <div className={style.sectionContainer}>
        <div className={style.heading}>
          <h2>Sign Up</h2>
          <hr className={style.line} />
        </div>
        <div className="errors">
          {myData.status === 200 && isSubmit ? (
            <div className={style.success}>Account created successfully</div>
          ) : (
            <p className={style.errorMsg}>{handleFailure()}</p>
          )}
        </div>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.formGroup}>
              <Input
                type="text"
                id="name"
                name="name"
                innerRef={nameRef}
                className={style.inputField}
                onChange={onChange}
                value={user.name}
                required
              />
              <label htmlFor="name" className={style.inputLabel}>
                Username
              </label>
            </div>
            <div className={style.formGroup}>
              <Input
                type="email"
                id="email"
                name="email"
                innerRef={emailRef}
                className={style.inputField}
                onChange={onChange}
                value={user.email}
                required
              />
              <label htmlFor="email" className={style.inputLabel}>
                Email address
              </label>
            </div>
            <div className={style.formGroup}>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                innerRef={passwordRef}
                className={style.inputField}
                onChange={onChange}
                value={user.password}
                required
              />
              <label htmlFor="password" className={style.inputLabel}>
                Password
              </label>
            </div>
            <div>
              {isSubmit && myData.status !== 200 ? (
                <Button type="submit" className={style.submitBtn}>
                  {loader}
                </Button>
              ) : (
                <Button type="submit" className={style.submitBtn}>
                  {isLoading ? 'Please wait...' : 'Submit'}
                </Button>
              )}
            </div>
          </form>
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/login" className={style.link}>
              {' '}
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;