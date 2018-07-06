import React from 'react'
import classNames from 'classnames/bind'

import Header from 'Components/Header'
import RoomList from 'Components/RoomList'
import RoomForm from 'Components/RoomForm'

import styles from './styles.module.css'

const cx = classNames.bind(styles)

const HomePage = ({ user, rooms = {}, _onCreateRoom }) => {
  return (
    <div className={cx('page')}>
      <Header user={user} />

      <div className={cx('body')}>
        <div className={cx('sidebar')}>
          <div className={cx('roomsModule')}>
            <h2 className={cx('moduleTitle')}>Rooms</h2>
            <RoomList rooms={rooms} />
            <RoomForm onSubmit={_onCreateRoom} />
          </div>
        </div>

        <div className={cx('content')} />
      </div>
    </div>
  )
}

export default HomePage
