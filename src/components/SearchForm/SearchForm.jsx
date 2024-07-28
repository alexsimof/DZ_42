import search from './search.svg';
import './SearchForm.sass';

export function SearchForm() {

  return (
    <form className="app-form">
      <input type="search" className="app-input" placeholder="Search for anything" />
      <img src={search} className="app-search" alt="search" />
    </form>
  );
}

