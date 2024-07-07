import logo from './logo.svg';
import search from './search.svg';
import basket from './basket.svg';
import language from './language.svg';
import './Header.sass';


export function Header() {

  return (
    <header className="app-header">
      <a className="app-link" href="/">
        <img src={logo} className="app-logo" alt="logo" />
      </a>
      <span>Categories</span>
      <form className="app-form">
        <input type="search" className="app-input" placeholder="Search for anything" />
        <button className="app-search">
          <img src={search} alt="search" />
        </button>
      </form>
      <span>Udemy Business</span>
      <span>Teach on Udemy</span>
      <img src={basket} alt="basket" />
      <div className="app-btn">
        <button className="app-login">Log in</button>
        <button className="app-signup">Sign Up</button>
        <button className="app-lang">
          <img src={language} alt="language" />
        </button>
      </div>
    </header>
  );
}