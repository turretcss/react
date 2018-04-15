import React, { Component } from 'react'

import { Radio } from '../Control'

let refCount = 0

class RadioGroup extends Component {
  constructor() {
    super()
    this._name = `_radio-group-${++refCount}_`
  }

  render() {
    const { options = [], name, value, onChange, ...props } = this.props
    return options.map(option => (
      <Radio
        {...props}
        name={name || this._name}
        key={option.value}
        value={value == option.value}
        onChange={() => onChange(option.value)}
        text={option.text}
      />
    ))
  }
}

export default RadioGroup
