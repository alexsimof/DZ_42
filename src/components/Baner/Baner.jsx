

import { Button } from '../Button';
import './Baner.sass';

export function Baner({ closeBanerVisible }) {

  return (
    <div className="app-baner">
      <p>
        <span>New to Udemy? Learning leads to upportunity </span>
        | Shop now to get an exclusive offer: Courses from €14.99.
      </p>
      <p><span>Ends </span>12.06.2024</p>
      <Button onClick={closeBanerVisible} className="app-baner-btn" text="&#x2715;" />
    </div>
  );
}