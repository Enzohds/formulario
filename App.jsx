import {useState} from 'react';
import './App.css';

import face from './img/facebook.png';
import insta from './img/instagram.png';
import whats from './img/whatsapp.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  };

  return(
    <main id="container">
      <form id="login_form" className={darkMode ? 'dark' : ''}>


      </form>

      <div id="form_header">

        <h1>Login</h1>
        <i id="mode_icon" className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`} onClick={toggleTheme}></i>
      </div>

    <div id="social_media">

        <a href="#">
          <img src={face} alt="facebook"/>
        </a>

        <a href="#">
          <img src={insta} alt="instagram"/>
        </a>

        <a href="#">
          <img src={whats} alt="whatsapp"/>
        </a>
    </div>
<div id="inputs">
    <div className="input-box">
      <label htmlFor="name">
         Name
         <div className="input-field">
           <i className="fa-solid fa-user"></i>
           <input type="text" name="name" id="name"/>
         </div>
      </label>
    </div>

    <div className="input-box">
      <label htmlFor="name">
         Name
         <div className="input-field">
           <i className="fa-solid fa-user"></i>
           <input type="text" name="name" id="name"/>
         </div>
      </label>
    </div>

    <div className="input-box">
      <label htmlFor="name">
         Name
         <div className="input-field">
           <i className="fa-solid fa-user"></i>
           <input type="text" name="name" id="name"/>
         </div>
      </label>
    </div>

    <div className="input-box">
      <label htmlFor="name">
         Name
         <div className="input-field">
           <i className="fa-solid fa-user"></i>
           <input type="text" name="name" id="name"/>
         </div>
      </label>
    </div>

  </div>
    </main>
  )
}


export default App;