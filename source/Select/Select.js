import React from 'react'
import classnames from 'classnames'

import { indicatorMap, sizeAliases } from '../constants'

const Select = ({
  options = [],
  empty = 'Please select ...',
  value,
  disabled,
  readOnly,
  size,
  color,
  className,
  onChange,
  ...props // should we spread props?
}) => (
  <label
    className={classnames('select', className, {
      ['select-' + (sizeAliases[size] || size)]: size,
      [color]: indicatorMap[color],
    })}>
    <select
      disabled={disabled || readOnly}
      value={toString(value)}
      onChange={event => onChange(toValue(event.target.value, options))}>
      {renderOptions(options, empty)}
    </select>
  </label>
)

function renderOptions(options, empty, defaultValue) {
  const emptyOption = empty !== false && (
    <option value={toString(defaultValue)} key={0}>
      {empty}
    </option>
  )
  const valueOptions = options.map(({ value, text }, i) => (
    <option key={i + 1} value={value}>
      {text}
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
