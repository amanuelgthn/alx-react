import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils'
function Footer() {
  return (
    <div className="Footer">
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
    </div>
  );
}
export default Footer;