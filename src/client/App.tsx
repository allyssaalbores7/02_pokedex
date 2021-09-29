import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import { ThemeProvider } from 'styled-components'
import { GridThemeProvider } from 'styled-bootstrap-grid'
import { GRID_THEME } from '../commons/constants/configs'

import useAuth from '../client/hooks/useAuth'
import GlobalStyle from './App.styles'
import defaultTheme from '../client/themes/default'
import routes from '../commons/constants/routes'
import DashboardPage from '../client/pages/Dashboard'
import LoginPage from './../client/pages/Login'
import FavoritesPage from './../client/pages/Favorites'
import ProfilePage from './../client/pages/Profile'

export default function App() {
  const { user } = useAuth()

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
            <GlobalStyle />
            <Router>
              <Switch>
                <Route exact path={routes.ROOT} component={DashboardPage} />
                <Route
                  exact
                  path={routes.FAVORITES}
                  component={FavoritesPage}
                />
                <Route exact path={routes.PROFILE} component={ProfilePage} />
              </Switch>
            </Router>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}
