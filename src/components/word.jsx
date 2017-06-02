import React from 'react'
import { Toggle, TextField } from 'material-ui'

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = (value) => {
      this.setState({ value })
    }
  }

  render() {
    return (
      <div>
        <div> hello world </div>
        <div> input </div>
        <TextField
          value={this.state.value}
          onChange={event => this.handleChange(event.target.value)}
          rows={5}
          muiltLine
        />
        <div> output </div>
        <div> { this.state.value } </div>
      </div>
    )
  }
}

export default Word
