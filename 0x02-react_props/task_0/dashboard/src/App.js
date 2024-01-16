import './App.css';
import Notification from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
function App() {
  return (
    <div className="App">
      <Notification />
      <getLatestNotification />
      <Header />
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <Login />
      <Footer />
    </div>
  );
}
export default App;