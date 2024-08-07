
import { useEffect, useState } from "react";

import { Baner } from "../../components/Baner";
import { Header } from "../../components/Header";
import { MainScreen } from "../../components/MainScreen";
import { Screen } from "../../components/Screen";
import { SliderBlock } from "../../components/SliderBlock";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.sass';

export function Home() {

  useEffect(() => {
    document.title = 'Home'
  }, [])

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