import React, { useState, useEffect } from "react";

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
    e.preventDefault();
    const user = {
      email: (email).toLowerCase(),
      password
    }
    props.login(user).then(props.closeModal);
  }

  const handleSubmitDemoUser = e => {
    e.preventDefault();
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    props.login(demoUser).then(props.closeModal);
  }

  useEffect(() => {
    props.removeErrors();
  }, []);

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <form className="login-form__form" onSubmit={handleSubmit}>

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
              <p className="login-form__form__error">{props.errors.email}</p>
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
              <p className="login-form__form__error">{props.errors.password}</p>
            </div>

          </div>

          <div className="login-form__form__lower-link-wrapper">
            <input type="submit" className="login-form__form__submit" value="Sign in" />

            {props.troubleLink}

            <div className="login-form__form__or">
              <p>OR</p>
            </div>

            <button className="demo-user-button" onClick={handleSubmitDemoUser}>Continue with Demo User</button>

          </div>

          <p className="login-form__form__terms">
            By clicking Sign in or Continue, you agree to Plantsy's Terms of Use and Privacy Policy.
          </p>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;