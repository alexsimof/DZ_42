
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import './profile.sass';

export function Profile() {

  useEffect(() => {
    document.title = 'Profile'
  }, [])

  return (
    <>
      <Header />
      <section>
        <div className="container">

        </div>
      </section>
    </>
  );
}