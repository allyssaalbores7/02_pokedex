import React from 'react'
import { useState, useRef } from 'react'
import { auth } from '../../services/FirebaseService'
import { Button, Input } from '../../components'
import {
  StyledText,
  StyledForm,
  FormItemContainer,
  ButtonContainer,
} from './styles'
import logoSrc from '../../assets/images/pokemon-logo.svg'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function onChangeInputHandler() {}

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      )
    } catch (error: any) {
      console.error(error)
      setError(error.message)
    }
  }

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      )
    } catch (error: any) {
      console.error(error)
      setError(error.message)
    }
  }

  return (
    <FormItemContainer>
      <StyledForm>
        <img src={logoSrc} alt="Pokemon logo" width="100%" />
        <Input
          onChange={onChangeInputHandler}
          label="Email"
          inputStyle="solid"
          autoComplete="username"
          ref={emailRef}
        />
        <Input
          onChange={onChangeInputHandler}
          label="Password"
          type="password"
          inputStyle="solid"
          autoComplete="current-password"
          ref={passwordRef}
        />
        <ButtonContainer>
          <Button label="LOG IN" type="primary" onClick={signIn} />
          <Button label="SIGN UP" type="secondary" onClick={createAccount} />
        </ButtonContainer>
        <StyledText text={error} type="body2-regular" />
      </StyledForm>
    </FormItemContainer>
  )
}
