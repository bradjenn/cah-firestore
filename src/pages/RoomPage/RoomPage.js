import React from 'react'
import classNames from 'classnames/bind'

import Header from 'Components/Header'

import styles from './styles.module.css'

const cx = classNames.bind(styles)

const RoomPage = ({ user }) => {
  return (
    <div className={cx('page')}>
      <Header user={user} />

      <div className={cx('body')}>room</div>
    </div>
  )
}

export default RoomPage
