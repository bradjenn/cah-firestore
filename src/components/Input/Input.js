import React from 'react'
import classNames from 'classnames/bind'

import styles from './styles.module.css'

const cx = classNames.bind(styles)

const Input = ({ white = false, black = false, className, ...rest }) => {
  const classes = ['input', { white, black }, className]

  return (
    <div className={cx('inputWrapper')}>
      <input {...rest} className={cx(...classes)} />
    </div>
  )
}

export default Input
