import logo from "../../logo.svg";
import basket from "../../basket.svg";
import language from "../../language.svg";

import { SearchForm } from "../SearchForm";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import "./header.sass";

export function Header() {

  return (
    <header className="app-header">
      <Link to="/" className="app-link">
        <img src={logo} className="app-logo" alt="logo"/>
      </Link>
      <span>Categories</span>
      <SearchForm />
      <span>Udemy Business</span>
      <span>Teach on Udemy</span>
      <img src={basket} alt="basket"/>
      <div className="app-btn">
        <Button className="app-login" text="Log in"/>
        <Link to="/register" className="app-signup">Sign Up</Link>
        <button className="app-lang">
          <img src={language} alt="language"/>
        </button>
      </div>
    </header>
  );
}
