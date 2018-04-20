import React from 'react'
import classnames from 'classnames'

import { indicatorMap, sizeAliases } from '../constants'

const Select = ({
  options = [],
  empty = 'Please select ...',
  value = null,
  defaultValue = null,
  readOnly,
  size,
  color,
  className,
  onChange,
  children,
  ...props
}) => (
  <label
    className={classnames('select', className, {
      ['select-' + (sizeAliases[size] || size)]: size,
      [color]: indicatorMap[color],
    })}>
    <select
      {...props}
      value={toString(value)}
      onChange={event => !readOnly && onChange(children ? event.target.value : toValue(event.target.value, options))}>
      {children || renderOptions(options, empty, defaultValue)}
    </select>
  </label>
)

function renderOptions(options, empty, defaultValue) {
  const emptyOption = empty !== false && (
    <option key={0} value={toString(defaultValue)}>
      {empty}
    </option>
  )
  const valueOptions = options.map(({ label, value, ...props }, i) => (
    <option {...props} key={i + 1} value={value}>
      {label}
    </option>
  ))
  return emptyOption ? [emptyOption, ...valueOptions] : valueOptions
}

function toString(value) {
  return value === null ? '' : String(value)
}

function toValue(string, options) {
  return string === '' ? null : options.reduce((acc, { value }) => (String(value) === string ? value : acc), string)
}

export default Select
