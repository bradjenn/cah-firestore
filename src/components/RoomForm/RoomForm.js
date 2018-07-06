import React from 'react'
import classNames from 'classnames/bind'

import styles from './styles.modules.css'

const cx = classNames.bind(styles)

const RoomForm = ({ roomName, setRoomName, _onSubmit }) => {
  return (
    <form className={cx('RoomForm')} onSubmit={_onSubmit}>
      <input type="text" onChange={evt => setRoomName(evt.target.value)} />
      <button type="submit">Create Room</button>
    </form>
  )
}

export default RoomForm
