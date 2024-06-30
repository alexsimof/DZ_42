import React from "react";
import Slider from "react-slick";
import { SlideItem } from './SlideItem';
import { useGetData } from '../../hooks/useGetData';

import './SliderBlock.sass';

export function SliderBlock() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [comments] = useGetData()

  return (
    <div className="slider-block">
      <div className="slider-container">
        <h3 className="slider-title">How learners like you are achieving their goals</h3>
        <Slider {...settings}>
          {comments.map((comment) => {
            const { id, body, name } = comment
            return (<SlideItem key={id} body={body} name={name} />)
          })}

        </Slider>
      </div>
    </div>
  );
}

