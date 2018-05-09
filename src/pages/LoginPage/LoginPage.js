import React from 'react'
import classNames from 'classnames/bind'

import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './styles.module.css'

const cx = classNames.bind(styles)

const LoginPage = ({ handleOnSubmit, handleOnChange, formState }) => {
  const _onChange = evt => {
    const { name, value } = evt.currentTarget
    handleOnChange(name, value, evt)
  }

  const _handleOnSubmit = evt => {
    evt.preventDefault()
    handleOnSubmit(formState)
  }

  return (
    <div className={cx('page')}>
      <h1 className={cx('pageTitle')}>Sign In</h1>

      <form className={cx('loginForm')} onSubmit={_handleOnSubmit}>
        <Input
          type="email"
          autoComplete="new-password"
          name="email"
          onChange={_onChange}
          placeholder="email"
        />

        <Input
          type="password"
          autoComplete="new-password"
          name="password"
          onChange={_onChange}
          placeholder="password"
        />

        <Button black type="submit" title="Sign In" />
      </form>
    </div>
  )
}

export default LoginPage
