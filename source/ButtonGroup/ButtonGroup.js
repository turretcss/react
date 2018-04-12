import React from 'react'
import classnames from 'classnames'

const ButtonGroup = ({ className, block, size, pill, square, color, border, children = [], ...props }) => (
  <div {...props} className={classnames('button-group', className, { 'button-group-block': block })}>
    {React.Children.toArray(children).map(child =>
      React.cloneElement(child, {
        size: child.props.size === undefined ? size : child.props.size,
        pill: child.props.pill === undefined ? pill : child.props.pill,
        square: child.props.square === undefined ? square : child.props.square,
        color: child.props.color === undefined ? color : child.props.color,
        border: child.props.border === undefined ? border : child.props.border,
      })
    )}
  </div>
)

export default ButtonGroup
