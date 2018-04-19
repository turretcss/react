import React from 'react'

import { Checkbox } from '../Control'

const CheckboxGroup = ({ value = [], onChange, options = [], ...props }) =>
  options.map(option => (
    <Checkbox
      {...props}
      key={option.value}
      value={contains(value, option.value)}
      onChange={checked => onChange(toggleOption(value, options, option.value, checked))}
      label={option.label}
    />
  ))

function toggleOption(values, options, optionValue, checked) {
  return options
    .filter(({ value }) => {
      if (optionValue !== value) {
        return contains(values, value)
      } else {
        return checked
      }
    })
    .map(({ value }) => value)
}

function contains(values, value) {
  return Array.isArray(values) && values.indexOf(value) !== -1
}

export default CheckboxGroup
