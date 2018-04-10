import React, { Component, Children } from 'react'

class Stateful extends Component {
  constructor(props) {
    super()
    this.state = { value: props.initial }
  }

  onChange = value => this.setState({ value })

  render() {
    const { render, children } = this.props
    const { value } = this.state

    if (render) {
      return render({ value, onChange: this.onChange })
    }

    return React.cloneElement(Children.only(children), { value, onChange: this.onChange })
  }
}

export default Stateful
