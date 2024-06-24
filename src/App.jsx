import logo from './logo.svg';
import basket from './basket.svg';
import language from './language.svg';

import { useEffect, useState } from 'react';
import { Baner } from './components/Baner';
import { MainScreen } from './components/MainScreen';
import { Form } from './components/Form';
import { Button } from './components/Button';
import { Screen } from './components/Screen';

import './App.sass';

export function App() {

  const [banerVisible, setBanerVisible] = useState(JSON.parse(localStorage.getItem('baner')) || true);
  const closeBanerVisible = () => {
    setBanerVisible(!banerVisible)
  }

  useEffect(() => {
    localStorage.setItem('baner', JSON.stringify(banerVisible));
  }, [banerVisible]);
  // console.log(banerVisible);


  return (
    <>
      {
        banerVisible
          ? <Baner closeBanerVisible={closeBanerVisible} />
          : null
      }
      <header className="app-header">
        <a className="app-link" href="/">
          <img src={logo} className="app-logo" alt="logo" />
        </a>
        <span>Categories</span>
        <Form />
        <span>Udemy Business</span>
        <span>Teach on Udemy</span>
        <img src={basket} alt="basket" />
        <div className="app-btn">
          <Button className="app-login" text="Log in" />
          <Button className="app-signup" text="Sign Up" />
          <button className="app-lang">
            <img src={language} alt="language" />
          </button>
        </div>
      </header>
      <MainScreen />
      <Screen />
    </>
  );
}
