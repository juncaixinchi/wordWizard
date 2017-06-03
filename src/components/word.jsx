import React from 'react'
import { Toggle, TextField, FlatButton } from 'material-ui'

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      input: ''
    }

    this.handleChange = (input) => {
      this.setState({ input })
    }

    this.getWord = (text) => {
      if (!text) return null
      const wordMap = new Map()
      const words = text.match(/[\w]+/g)
      words.forEach((word) => {
        if (wordMap.has(word)) {
          wordMap.set(word, wordMap.get(word) + 1)
        } else {
          wordMap.set(word, 1)
        }
      })
      return [...wordMap.entries()].sort((a, b) => b[1] - a[1]).map((array, index) => (
        <div style={{ fontSize: 24 }}>
          { `${array[0]}: ${array[1]}` }
        </div>
        ))
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div> hello world </div>
        <div> input </div>
        <textarea
          value={this.state.input}
          onChange={event => this.handleChange(event.target.value)}
          rows={5}
        />
        <br />
        <FlatButton
          label="提交"
          onTouchTap={() => this.setState({ value: this.state.input })}
        />
        <FlatButton
          label="保存"
          onTouchTap={() => this.setState({ value: this.state.input })}
        />
        <div> output </div>
        <div> { this.getWord(this.state.value) } </div>
      </div>
    )
  }
}

export default Word
