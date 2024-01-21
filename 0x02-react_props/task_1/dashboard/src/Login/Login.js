import './Login.css';
function Login() {
  return (
    <div className="App-Login">
       <form className='new-form' action="#" method="POST">
          <div class="input-box underline">
            <label>Email: </label>
            <input
              label='email'
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <label>Password: </label>
            <input
              label='password'
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required/>
            <div class="underline"></div>
          </div>
          <div class="input-box button">
            <input type="submit" name="" value="OK"/>
          </div>
        </form>
    </div>
  );
}
export default Login;