import React from 'react'

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
    <div>
      <form onSubmit={_handleOnSubmit}>
        <input
          type="email"
          autoComplete="new-password"
          name="email"
          onChange={_onChange}
          placeholder="email"
        />

        <input
          type="password"
          autoComplete="new-password"
          name="password"
          onChange={_onChange}
          placeholder="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
