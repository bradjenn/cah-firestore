import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './styles.module.css'

const cx = classNames.bind(styles)

const Button = ({
  title = '',
  style,
  className,
  white = false,
  black = false,
  asLink = false,
  to = null,
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick,
}) => {
  const classes = ['btn', { asLink }, { white, black }, { disabled }, className]

  const props = {
    className: cx(...classes),
    style,
  }

  if (asLink) {
    props.to = to
  } else {
    props.type = type
    props.disabled = disabled
    props.onClick = onClick
  }

  return React.createElement(asLink ? Link : 'button', props, title)
}

export default Button
