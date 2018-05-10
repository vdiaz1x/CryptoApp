import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
           <div class="main">
    <div class = "nav-container">
      <div class="nav">
        <div class = "nav-left">
          <div class="logo-container">
          </div>
        </div>
        <div class="nav-right">
          <a href="register">
            <div class="sign-up-button">
            SIGN-UP
            </div>
          </a>
        </div>
      </div>
    </div>
    <section class="login-container">
      <div class="input-container login-header">
        <h2 class="has-text-black is-size-1">Login</h2>
      </div>
      <form class="login-form" method="POST" action="login">
        <div class="input-container">
        <p class="input-title">Username</p>
          <input class="input is-large" type="text" placeholder="username" name="username">
          <span class="icon ">
          <i class="fas fa-envelope fa-sm"></i>
          </span>
        </div>
        <div class="input-container">
          <p class="input-title">Password</p>
            <input class="input is-large" type="password" placeholder="password" name="password">
            <span class="icon ">
            <i class="fas fa-lock"></i>
          </span>
        </div>
        <label class="checkbox">
        <input type="checkbox">
        Remember me
        </label>
        <div class="input-container">
            <input type='submit' value='Log in!' class="button is-dark" />
        </div>
      </form>
      </div>
    );
  }
}

export default Login;

