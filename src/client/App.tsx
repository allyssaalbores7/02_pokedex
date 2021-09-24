import React from 'react'
import { useRef } from 'react'
import { AuthContext } from './contexts/AuthContext'
import { ThemeProvider } from 'styled-components'
import { Button, Input } from '../client/components'
import defaultTheme from '../client/themes/default'
import useAuth from '../client/hooks/useAuth'
import { auth } from './services/FirebaseService'

export default function App() {
  const { user } = useAuth()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function onChangeInputHandler() {}

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      )
    } catch (error) {
      console.error(error)
    }
  }

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      )
    } catch (error) {
      console.error(error)
    }
  }

  const signOut = async () => {
    await auth.signOut()
  }

  return (
    <AuthContext.Provider value={user}>
      <ThemeProvider theme={defaultTheme}>
        <div className="App">
          <header className="App-header">
            <h1>Pokedex</h1>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          {!user ? (
            <div>
              <Input
                onChange={onChangeInputHandler}
                placeholder="Email"
                ref={emailRef}
              />
              <Input
                onChange={onChangeInputHandler}
                placeholder="Password"
                ref={passwordRef}
              />
              <Button label="Log in" type="primary" onClick={signIn} />
              <Button
                label="Sign up"
                type="secondary"
                onClick={createAccount}
              />
            </div>
          ) : (
            <div>
              <h2 className="mt-4 text-center">Welcome {user.email}</h2>
              <Button label="Sign out" type="primary" onClick={signOut} />
            </div>
          )}
        </div>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}
