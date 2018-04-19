import React from 'react'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

const RadioButtonGroup = ({ options = [], color, activeColor = 'primary', value, onChange, ...props }) => (
  <ButtonGroup {...props}>
    {options.map(option => (
      <Button
        key={option.value}
        label={option.label}
        onClick={() => onChange(option.value)}
        color={value == option.value ? activeColor : color}
      />
    ))}
  </ButtonGroup>
)

export default RadioButtonGroup
