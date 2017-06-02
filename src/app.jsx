import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Word from './components/word'

// required by Material UI
injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <div>
      <h2>Word</h2>
      <Word />
    </div>
  </MuiThemeProvider>
)

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(<App />, app)
