import search from './search.svg';
import './Form.sass';

export function Form() {

  return (
    <form className="app-form">
      <input type="search" className="app-input" placeholder="Search for anything" />
      <img src={search} className="app-search" alt="search" />
    </form>
  );
}

