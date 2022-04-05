import React from "react";
import { useState, useEffect } from "react";

const SignUpForm = props => {
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [password, setPassword] = useState('');

  const update = field => {
    return e => {
      if (field === 'email') {
        setEmail(e.target.value);
      } else if (field === 'name') {
        setName(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: (email).toLowerCase(),
      name: (name).toLowerCase(),
      password: password
    }
    console.log('USER', user);
    props.signup(user).then(props.closeModal);
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
    <div className="signup-form">
      <div className="signup-form__inner">
        <form className="signup-form__form" onSubmit={handleSubmit}>

          <div className="signup-form__form__header-wrapper">
            <h1>Create your account</h1>
            <h3>Registration is easy.</h3>
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
              <p className="signup-form__form__error">{props.errors.email}</p>
            </div>

            <div className="signup-form__form__inputs">
              <label className="signup-form__form__label">First name
                <input
                  type="text"
                  className="signup-form__form__input"
                  value={name}
                  onChange={update('name')}
                />
              </label>
              <p className="signup-form__form__error">{props.errors.name}</p>
            </div>

            <div className="signup-form__form__inputs">
              <label className="signup-form__form__label">Password
                <input
                  type="password"
                  className="signup-form__form__input"
                  value={password}
                  onChange={update('password')}
                />
              </label>
              <p className="signup-form__form__error">{props.errors.password}</p>
            </div>
          </div>

          <div className="signup-form__form__lower-inputs">
            <input type="submit" className="signup-form__form__submit" value="Register" />

            <div className="signup-form__form__or">
              <p>OR</p>
            </div>

            <button className="signup-form__form__demo-button" onClick={handleSubmitDemoUser}>Continue with Demo User</button>
          </div>

          <p className="signup-form__form__terms">
            By clicking Register or Continue, you agree to Plantsy's Terms of Use and Privacy Policy.
          </p>

        </form>
      </div>
    </div>
  );

}

export default SignUpForm;