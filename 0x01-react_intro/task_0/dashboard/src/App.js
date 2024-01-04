import img from './Holberton.jpg';
import css from './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
    </div>
  );
}
export default App;