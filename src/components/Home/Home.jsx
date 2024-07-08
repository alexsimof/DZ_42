
import {useEffect, useState} from "react";

import {Baner} from "../Baner";
import { Header } from "../Header";
import {MainScreen} from "../MainScreen";
import {Screen} from "../Screen";
import {SliderBlock} from "../SliderBlock";

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


  return (
    <>
      {
        banerVisible
          ? <Baner closeBanerVisible={closeBanerVisible} />
          : null
      }
      <Header />
      <MainScreen />
      <Screen />
      <SliderBlock />
    </>
  );
}