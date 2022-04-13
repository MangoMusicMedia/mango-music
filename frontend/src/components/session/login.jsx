import React, { useState, useEffect } from "react";
import WaterButton from "../buttons/water_button";

const LoginForm = props => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const update = field => {
    return e => {
      if (field === 'email') {
        setEmail(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    }
  }

  const handleSubmit = e => {
    const user = {
      email,
      password
    }

    props.login(user);
  }

  const handleSubmitDemoUser = e => {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@email.com',
      password: 'password123'
    }
    props.login(demoUser).then(props.closeModal);
  }

  const submitHandler = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  }

  useEffect(() => {
    props.removeErrors();
  }, []);

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <form className="login-form__form" onKeyDown={submitHandler}>

          <div className="login-form__form__header-wrapper">
            <h1>Sign in</h1>
            {props.registerButton}
          </div>

          <div className="login-form__form__input-wrapper">

            <div className="login-form__form__inputs">
              <label className="login-form__form__label">Email address
                <input
                  type="text"
                  className="login-form__form__input"
                  value={email}
                  onChange={update('email')}
                />
              </label>
              <p className="login-form__form__error">{email === '' && props.errors.email}</p>
            </div>

            <div className="login-form__form__inputs">
              <label className="login-form__form__label">Password
                <input
                  type="password"
                  className="login-form__form__input"
                  value={password}
                  onChange={update('password')}
                />
              </label>
              <p className="login-form__form__error">{password !== '' && Object.values(props.errors)}</p>
                <p className="login-form__form__error">{password === '' && Object.values(props.errors)}</p>
            </div>

          </div>

          <div className="login-form__form__lower-link-wrapper">
            <WaterButton handleSubmit={handleSubmit} title={"Log In"}/>

            {props.troubleLink}

            <div className="login-form__form__or">
              <p>OR</p>
            </div>

            <button className="demo-user-button" onClick={handleSubmitDemoUser}>Continue with Demo User</button>

          </div>

          <p className="login-form__form__terms">
            By clicking Sign in or Continue, you agree to Mango Music's Terms of Use and Privacy Policy.
          </p>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;