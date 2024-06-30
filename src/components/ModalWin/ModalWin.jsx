import './ModalWin.sass';

export function ModalWin() {

  return (

    <div className="modal">
      <h3 className="modal-title">Sign Up and start learning</h3>
      <form className="modal-form" action="">
        <input className="modal-input" type="text" name="name" placeholder="Full name" />
        <input className="modal-input" type="email" name="email" placeholder="email" />
        <input className="modal-input" type="password" name="password" placeholder="Password" />
        <button className="modal-button" type="submit">Sign Up</button>
      </form>
    </div>
  )
}