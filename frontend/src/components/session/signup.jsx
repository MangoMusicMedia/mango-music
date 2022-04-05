import React from "react";
import { useState, useEffect } from "react";
import WaterButton from "../buttons/water_button";

const SignUpForm = props => {
  let [email, setEmail] = useState('');
  let [username, setUserName] = useState('');
  let [password1, setPassword1] = useState('');
  let [password2, setPassword2] = useState('');

  const update = field => {
    return e => {
      if (field === 'email') {
        setEmail(e.target.value);
      } else if (field === 'username') {
        setUserName(e.target.value);
      } else if (field === 'password1'){
        setPassword1(e.target.value);
      } else {
        setPassword2(e.target.value);
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: (email).toLowerCase(),
      name: (username).toLowerCase(),
      password: password2
    }
    props.signup(user).then(props.closeModal);
  }

  const handleSubmitDemoUser = e => {
    e.preventDefault();
    const demoUser = {
      email: 'demouser@email.com',
      password: 'password123'
    }
    props.login(demoUser).then(props.closeModal);
  }

  useEffect(() => {
    props.removeErrors();
  }, []);

  return (
    <div className="signup-form">
      <div className="signup-form__inner">
        <form className="signup-form__form" onSubmit={handleSubmit}>

          <div className="signup-form__form__header-wrapper">
            <h1>Create your Mango account</h1>
            <h2>It's quick and easy</h2>
          </div>

          <div className="signup-form__form__input-wrapper">

            <div className="signup-form__form__inputs">
              <label className="signup-form__form__label">Email address
                <input
                  type="text"
                  className="signup-form__form__input"
                  value={email}
                  onChange={update('email')}
                />
              </label>
              <p className="signup-form__form__error">{props.errors}</p>
            </div>

            <div className="signup-form__form__inputs">
              <label className="signup-form__form__label">Username
                <input
                  type="text"
                  className="signup-form__form__input"
                  value={username}
                  onChange={update('username')}
                />
              </label>
              <p className="signup-form__form__error">{props.errors}</p>
            </div>

            <div className="signup-form__form__inputs">
              <label className="signup-form__form__label">Password
                <input
                  type="password"
                  className="signup-form__form__input"
                  value={password1}
                  onChange={update('password1')}
                />
              </label>
              <p className="signup-form__form__error">{props.errors}</p>
            </div>
            <div className="signup-form__form__inputs">
              <label className="signup-form__form__label">Confirm Password
                <input
                  type="password"
                  className="signup-form__form__input"
                  value={password2}
                  onChange={update('password2')}
                />
              </label>
              {password1 === password2 ? (
                <p className="signup-form__form__error"></p>
              ) : (
                <p className="signup-form__form__error">Please try re-entering your password</p>
              )}
            </div>
          </div>

          <div className="signup-form__form__lower-inputs">
            <WaterButton title={'Create Account'} />
            {/* <input type="submit" className="signup-form__form__submit" value="Sign Up" /> */}

            <div className="signup-form__form__or">
              <p>OR</p>
            </div>

            <button className="signup-form__form__demo-button" onClick={handleSubmitDemoUser}>Continue with Demo User</button>
          </div>

          <p className="signup-form__form__terms">
            By clicking Register or Continue, you agree to Mango Music's Terms of Use and Privacy Policy.
          </p>

        </form>
      </div>
    </div>
  );

}

export default SignUpForm;