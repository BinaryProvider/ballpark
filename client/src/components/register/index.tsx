import React from 'react';

import { useInput } from '../../hooks/useInput';
import styles from './register.module.scss';

const Register: React.FC<any> = props => {
  const {
    value: username,
    bind: bindUsername,
    isValid: isValidUsername,
    validationClasses: usernameValidationClasses,
    validate: validateUsername,
    reset: resetUsername
  } = useInput('', true);

  const registerUser = (event: React.FormEvent): void => {
    validateUsername();

    if (isValidUsername) {
      props.registerUser(username);
      resetUsername();
    }

    event.preventDefault();
  };

  return (
    <div className={`${styles['register']}`}>
      <h1 className="text-center pt-5 w-100">
        A collaborative tool to estimate user stories
      </h1>
      <div className="slug d-inline-flex justify-content-center mt-4 w-100">
        <h5 className="col-10 text-center">
          Ballpark allows you to play planning poker online. You and your
          colleagues can create user stories and estimate them together in
          real-time.
        </h5>
      </div>
      <div className="d-inline-flex justify-content-center my-4 w-100">
        <form
          autoComplete="off"
          autoCapitalize="false"
          spellCheck={false}
          className={`${styles['register-form']} col-12 col-sm-10 col-md-7 flex-grow-1 mt-2`}
          onSubmit={registerUser}
        >
          <div
            className={`form-group d-flex flex-row ${usernameValidationClasses()}`}
          >
            <input
              className={`${
                styles['form-control']
              } form-control-lg flex-grow-1 ${usernameValidationClasses()}`}
              placeholder="Enter your name to get started"
              {...bindUsername}
            ></input>
            <button className="col-2 btn btn-lg">
              <i className="icon ion-md-arrow-round-forward"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
