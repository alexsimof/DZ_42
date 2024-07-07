import { IconLinks } from '../../constants';
import { LogoIcons } from '../LogoIcons';
import './Screen.sass';

export function Screen() {

  return (
    <div className="screen">
      <p className="screen-text">
        Trusted by over 16,000 companies and millions of learners around the world
      </p>
      <ul className="screen-block">
        {IconLinks.map(({ link, id }) => (
          <LogoIcons className="screen-list" text={link} key={id} />
        ))}
      </ul>
    </div>
  );
}