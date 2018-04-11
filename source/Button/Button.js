import React from 'react'
import classnames from 'classnames'

import { indicatorMap, sizeAliases } from '../constants'

const Button = ({
  Tag = 'button',
  type = 'button',
  className,
  size,
  border,
  square,
  color,
  pill,
  spinner,
  block,
  children,
  text,
  ...props
}) => (
  <Tag
    {...props}
    type={type}
    className={
      classnames(className, {
        ['button-' + (sizeAliases[size] || size)]: size,
        ['button-' + color]: color && !indicatorMap[color],
        ['button-block']: block,
        ['button-border']: border,
        ['button-pill']: pill,
        ['button-square']: square,
        ['spinner']: spinner,
        [color]: indicatorMap[color],
      }) || null
    }
    children={children || text}
  />
)

export const ButtonLink = props => <Button {...props} Tag="a" className={['button', props.className]} type={null} />

export default Button
