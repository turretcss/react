import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { indicatorMap, sizeAliases } from '../constants'

class Select extends React.PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node, value: PropTypes.any })),
    empty: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
    value: PropTypes.any,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['xs', 's', 'l', 'xl', 'xsmall', 'small', 'large', 'xlarge']),
    color: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
    className: PropTypes.any,
  }

  static defaultProps = {
    options: [],
    empty: 'Please select ...',
    value: null,
    onChange: () => {},
  }

  render() {
    const { options, empty, value, readOnly, size, color, className, onChange, children, ...props } = this.props
    return (
      <label
        className={classnames('select', className, {
          ['select-' + (sizeAliases[size] || size)]: size,
          [color]: indicatorMap[color],
        })}>
        <select
          {...props}
          value={toString(value)}
          onChange={event =>
            !readOnly && onChange(children ? event.target.value : toValue(event.target.value, options))
          }>
          {children || renderOptions(options, empty)}
        </select>
      </label>
    )
  }
}

function renderOptions(options, empty) {
  const emptyOption = empty !== false && (
    <option key={0} value="">
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
