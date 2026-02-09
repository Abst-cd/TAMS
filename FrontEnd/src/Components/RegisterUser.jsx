import { useState } from 'react';
import './RegisterUser.css';
import Login from './Login'; 


function RegisterUser() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.msg);
        setUserEmail(email);
        setIsRegistered(true); // Cambia a la vista de Login
      })
      .catch(err => console.error(err));
  }

  function goBack(){
    setIsRegistered(false);
    setUserEmail('');
  }
  // Si el registro fue exitoso, muestra Login
  if (isRegistered) {
    return <Login email={userEmail} onBack={goBack}/>;
  }

  return (
    <div className="RegisteringUser">
      <h1 id="register-title">Register</h1>
      <div id="register-container" className="registerbox">
        <form onSubmit={handleRegister}>
          <input type="email" id="email-input" name="email" placeholder="Email" required />
          <input type="password" id="password-input" name="password" placeholder="Password" required />
          <button type="submit" id="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;