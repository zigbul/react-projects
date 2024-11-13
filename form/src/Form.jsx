import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  const validate = (e) => {
    e.preventDefault(e);

    if (username.length > 7) {
      setErrorUsername('');
      setUserColor('green');
    } else {
      setErrorUsername('Username must be 8 letters long.');
      setUserColor('red');
    }

    if (email.includes('@gmail')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('Email should havw @gmail');
      setEmailColor('red');
    }

    if (password.length > 7) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('Password should be 8 letters long');
      setPasswordColor('red');
    }

    if (password !== '' && password === confirmPassword) {
      setErrorConfirmPassword('');
      setConfirmPasswordColor('green');
    } else {
      setErrorConfirmPassword('Paswords didn`t match');
      setConfirmPasswordColor('red');
    }
  };

  return (
    <div className="card">
      <div className="card__image"></div>
      <form>
        <input
          type="text"
          placeholder="Name"
          style={{ borderColor: userColor }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="error">{errorUsername}</p>

        <input
          type="text"
          placeholder="Email"
          style={{ borderColor: emailColor }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>

        <input
          type="password"
          placeholder="Password"
          style={{ borderColor: passwordColor }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>

        <input
          type="password"
          placeholder="Confirm password"
          style={{ borderColor: confirmPasswordColor }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorConfirmPassword}</p>

        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
