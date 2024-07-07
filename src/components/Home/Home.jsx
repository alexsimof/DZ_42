import logo from "../../logo.svg";
import basket from "../../basket.svg";
import language from "../../language.svg";

import {useEffect, useState} from "react";
import {Baner} from "../Baner";
import {MainScreen} from "../MainScreen";
import {Form} from "../Form";
import {Button} from "../Button";
import {Screen} from "../Screen";
import {SliderBlock} from "../SliderBlock";
import {ModalWin} from "../ModalWin";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.sass';

export function Home() {

  const data = JSON.parse(localStorage.getItem('baner'));
  let [banerVisible, setBanerVisible] = useState(data);
  const closeBanerVisible = () => {
    setBanerVisible(!banerVisible)
  }
  if (data === null) { banerVisible = true }
  useEffect(() => {
    localStorage.setItem('baner', JSON.stringify(banerVisible));
  }, [banerVisible]);


  const [modalActive, setModalActive] = useState(false)
  const openModal = () => { setModalActive(!modalActive) }

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
          <Button onClick={openModal} className="app-signup" text="Sign Up" />
          <button className="app-lang">
            <img src={language} alt="language" />
          </button>
        </div>
      </header>
      <MainScreen />
      <Screen />
      <SliderBlock />
      {
        modalActive ? <ModalWin openModal={openModal} /> : null
      }

    </>
  );
}