import img from './Holberton.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
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
        </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
    </div>
  );
}
export default App;