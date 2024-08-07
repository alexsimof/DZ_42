
import { useEffect } from 'react';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';


import './register.sass';

export function Register() {

  useEffect(() => {
    document.title = 'Register'
  }, [])



  return (
    <>
      <Header />
      <div className="modal">
        <div className="modal-content">
          <h3 className="modal-title">Sign Up and start learning</h3>
          <form className="modal-form" action="">

            <input className={"modal-input"} name={"name"} placeholder={"Full name"} />
            <input className={"modal-input"} name={"email"} placeholder={"email"} />
            <input className={"modal-input"} name={"password"} placeholder={"Password"} />

            <Button className={"modal-button"} type="submit" text={"Sign Up"} />
          </form>
        </div>
      </div>
    </>
  )
}