import img from './Holberton.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utilist';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
    </div>
  );
}
export default App;