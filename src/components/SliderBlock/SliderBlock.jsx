import React from "react";
import Slider from "react-slick";

import quote from './quote.svg'
import play from './play.svg'
import './SliderBlock.sass';

export function SliderBlock() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-block">
      <div className="slider-container">
        <h3 className="slider-title">How learners like you are achieving their goals</h3>
        <Slider {...settings}>
          <div className="slider-item">
            <img src={quote} alt="quote-icon" />
            <p>
              I am proud to say that after a few months of taking this course...
              I passed my exam and am now an AWS Certified Cloud Practitioner!
              This content was exactly what the CCP exam covered.
            </p>
            <div className="slider-autor">
              <p className="slider-autor-icon">WA</p>
              <p className="slider-autor-name">Will A</p>
            </div>
            <div className="slider-link">
              <img src={play} alt="icon" />
              <span>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
            </div>
          </div>
          <div className="slider-item">
            <img src={quote} alt="quote-icon" />
            <p>
              I am proud to say that after a few months of taking this course...
              I passed my exam and am now an AWS Certified Cloud Practitioner!
              This content was exactly what the CCP exam covered.
            </p>
            <div className="slider-autor">
              <p className="slider-autor-icon">WA</p>
              <p className="slider-autor-name">Will A</p>
            </div>
            <div className="slider-link">
              <img src={play} alt="icon" />
              <span>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
            </div>
          </div>
          <div className="slider-item">
            <img src={quote} alt="quote-icon" />
            <p>
              I am proud to say that after a few months of taking this course...
              I passed my exam and am now an AWS Certified Cloud Practitioner!
              This content was exactly what the CCP exam covered.
            </p>
            <div className="slider-autor">
              <p className="slider-autor-icon">WA</p>
              <p className="slider-autor-name">Will A</p>
            </div>
            <div className="slider-link">
              <img src={play} alt="icon" />
              <span>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
            </div>
          </div>
          <div className="slider-item">
            <img src={quote} alt="quote-icon" />
            <p>
              I am proud to say that after a few months of taking this course...
              I passed my exam and am now an AWS Certified Cloud Practitioner!
              This content was exactly what the CCP exam covered.
            </p>
            <div className="slider-autor">
              <p className="slider-autor-icon">WA</p>
              <p className="slider-autor-name">Will A</p>
            </div>
            <div className="slider-link">
              <img src={play} alt="icon" />
              <span>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

