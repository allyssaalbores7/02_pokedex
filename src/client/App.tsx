import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../client/components'
import defaultTheme from '../client/themes/default'

function App() {
  function onClickButtonHandler() {
    alert('Clicked!')
  }

  return (
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
        <Button
          label="This is a button"
          type="primary"
          onClick={onClickButtonHandler}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
