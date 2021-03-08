import React, { useState } from 'react';

const Signup = (props) => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmedPassword, setUserConfirmedPassword] = useState('');

  function handleSubmit(event) {
    //return user info to parent component
    if (userPassword !== userConfirmedPassword) {
      return (
        alert('Passwords do not match')
      )
    } else {
      props.signupUser(userEmail, userPassword);
    }
    event.preventDefault();
  }

  function handleChange(event) {
    switch (event.target.name) {
      case 'email':
        setUserEmail(event.target.value);
        break;
      case 'password':
        setUserPassword(event.target.value);
        break;
      // for confirmPassword case
      default:
        setUserConfirmedPassword(event.taret.value);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit.bind(this)}>
      <input
      type="text"
      onChange = {handleChange.bind(this)}
      name="email"
      placeholder="Enter Email"
      >
      </input>
      <input
      type="text"
      onChange={handleChange.bind(this)}
      name="password"
      placeholder="Enter password">
      </input>
      <input
      type="text"
      onChange={handleChange.bind(this)}
      name="confirmPassword"
      placeholder="Confirm password">
      </input>
      <button>Signup</button>
    </form>
  )
}

export default Signup;
