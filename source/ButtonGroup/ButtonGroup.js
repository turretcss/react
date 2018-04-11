import React from 'react'
import classnames from 'classnames'

const ButtonGroup = ({ className, block, size, pill, square, color, border, children = [], ...props }) => (
  <div {...props} className={classnames('button-group', className, { 'button-group-block': block })}>
    {React.Children.toArray(children).map(child =>
      React.cloneElement(child, {
        size: size || child.props.size,
        pill: pill || child.props.pill,
        square: square || child.props.square,
        color: color || child.props.color,
        border: border || child.props.border,
      })
    )}
  </div>
)

export default ButtonGroup
