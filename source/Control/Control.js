import React from 'react'
import classnames from 'classnames'

import { indicatorMap, sizeAliases } from '../constants'

const noop = () => {}

const typeAliases = {
  switch: 'checkbox',
}

const Control = ({
  type = 'checkbox',
  className,
  size,
  disabled,
  name,
  value = false,
  readOnly,
  inline,
  color,
  children,
  text,
  reversed,
  onChange = noop,
  // ...props // TODO: do we need to spread props?
}) => (
  <label
    className={classnames('control', className, type, {
      ['control-' + (sizeAliases[size] || size)]: size,
      ['control-inline']: inline,
      ['control-reversed']: reversed,
      [color]: indicatorMap[color],
      disabled: disabled || readOnly,
    })}>
    <input
      name={name}
      type={typeAliases[type] || type}
      disabled={disabled || readOnly}
      checked={value}
      onClick={event => onChange(event.target.checked)}
      onChange={noop}
    />
    <span className="control-indicator" />
    {(children || text) && <span className="control-label">{children || text}</span>}
  </label>
)

export const Checkbox = Control
export const Radio = props => <Control {...props} type="radio" />
export const Switch = props => <Control {...props} type="switch" />

export default Control
