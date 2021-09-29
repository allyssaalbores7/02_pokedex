import { AuthContext } from './contexts/AuthContext'
import { ThemeProvider } from 'styled-components'
import { GridThemeProvider } from 'styled-bootstrap-grid'
import GlobalStyle from './App.styles'

import defaultTheme from '../client/themes/default'
import useAuth from '../client/hooks/useAuth'
import { auth } from './services/FirebaseService'
import { Button } from './components'
import { GRID_THEME } from '../commons/constants/configs'

import LoginPage from './../client/pages/Login'

export default function App() {
  const { user } = useAuth()

  const signOut = async () => {
    await auth.signOut()
  }

  if (!user) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <LoginPage />
      </ThemeProvider>
    )
  }

  return (
    <AuthContext.Provider value={user}>
      <ThemeProvider theme={defaultTheme}>
        <GridThemeProvider gridTheme={GRID_THEME}>
          <>
            <header className="App-header">
              <h2 className="mt-4 text-center">Welcome {user.email}</h2>
              <Button label="Sign out" type="primary" onClick={signOut} />
            </header>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}
