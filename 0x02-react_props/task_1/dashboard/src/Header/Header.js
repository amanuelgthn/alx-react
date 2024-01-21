import img from './Holberton.jpg';
import './Header.css';
function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
    </div>
  );
}
export default Header;