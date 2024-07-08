

import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {

    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;

        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;

        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break;

        case 'isEmail':
          const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          regex.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break;
        default:
          break;
      }
    }
  }, [value])

  useEffect(() => {

    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    emailError,
    maxLengthError,
    inputValid,
  }
}


export const useInput = (initionalValue, validations) => {
  const [value, setValue] = useState(initionalValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onBlur = (event) => {
    setDirty(true)
  }
  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
  }
}