const template = `
<form class="register-form">
  <h2>Register With Us</h2>
  <div class="form-control">
    <label for="username">Username</label>
    <input id="username" name="username" type="text">
    <small class="error-message"></small>
  </div>
  <div class="form-control">
    <label for="email">Email</label>
    <input id="email" name="email" type="text">
    <small class="error-message"></small>
  </div>
  <div class="form-control">
    <label for="password">Password</label>
    <input id="password" name="password" type="password">
    <small class="error-message"></small>
  </div>
  <div class="form-control">
    <label for="password-confirm">Password Confirm</label>
    <input id="password-confirm" name="password-confirm" type="password">
    <small class="error-message"></small>
  </div>
  <button type="submit">Join</button>
</form>
`;

export default template;
