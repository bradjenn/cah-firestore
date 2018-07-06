import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './styles.modules.css'

const cx = classNames.bind(styles)

const RoomList = ({ rooms = {} }) => {
  function renderRoomItem(room) {
    return (
      <Link key={room.id} to={room.id}>
        {room.name}
      </Link>
    )
  }

  function renderRoomItems() {
    const roomItems = []
    for (const roomID in rooms) {
      roomItems.push(renderRoomItem(rooms[roomID]))
    }

    return roomItems
  }

  return <div className={cx('RoomList')}>{renderRoomItems()}</div>
}

export default RoomList
