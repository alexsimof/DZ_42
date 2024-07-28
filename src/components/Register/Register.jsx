
import { useInput } from '../../hooks/useValidation'
import { Button } from '../Button'
import { Header } from '../Header'


import './register.sass';

export function Register() {


  const name = useInput('', { isEmpty: true, minLength: 3 })
  const email = useInput('', { isEmpty: true, minLength: 4, isEmail: true })
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 8 })


  return (
    <>
      <Header />
      <div className="modal">
        <div className="modal-content">
          <h3 className="modal-title">Sign Up and start learning</h3>
          <form className="modal-form" action="">

            {(name.isDirty && name.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым!</div>}
            <input onChange={event => name.onChange(event)} onBlur={event => name.onBlur(event)} value={name.value} className={"modal-input"} name={"name"} placeholder={"Full name"} />

            {(email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым!</div>}
            {(email.isDirty && email.emailError) && <div style={{ color: 'red' }}>Некорректный email!</div>}
            <input onChange={event => email.onChange(event)} onBlur={event => email.onBlur(event)} value={email.value} className={"modal-input"} name={"email"} placeholder={"email"} />

            {(password.isDirty && password.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым!</div>}
            {(password.isDirty && password.minLengthError) && <div style={{ color: 'red' }}>Некорректная длина!</div>}
            {(password.isDirty && password.maxLengthError) && <div style={{ color: 'red' }}>Некорректная длина!</div>}
            <input onChange={event => password.onChange(event)} onBlur={event => password.onBlur(event)} value={password.value} className={"modal-input"} name={"password"} placeholder={"Password"} />

            <Button disabled={!name.inputValid || !email.inputValid || !password.inputValid} className={"modal-button"} type="submit" text={"Sign Up"} />
          </form>
        </div>
      </div>
    </>
  )
}