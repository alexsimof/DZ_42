

import quote from '../quote.svg';
import play from '../play.svg';

import './SlideItem.sass';

export function SlideItem({ id, body, name }) {

  return (
    <div className="slider-item">

      <img src={quote} alt="quote-icon" />
      <p key={id}>{body}</p>
      <div className="slider-autor">
        <p className="slider-autor-icon">WA</p>
        <p className="slider-autor-name">{name}</p>
      </div>
      <div className="slider-link">
        <img src={play} alt="icon" />
        <span>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</span>
      </div>
    </div>
  );
}