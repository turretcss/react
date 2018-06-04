import React, { Component, Children } from 'react'

class Stateful extends Component {
  constructor(props) {
    super()
    this.state = { value: props.initial }
  }

  onChange = value => this.setState({ value })

  render() {
    const { render, children } = this.props
    const childProps = { value: this.state.value, onChange: this.onChange }

    if (render) {
      return render(childProps)
    }

    if (typeof children === 'function') {
      return children(childProps)
    }

    return React.cloneElement(Children.only(children), childProps)
  }
}

export default Stateful
