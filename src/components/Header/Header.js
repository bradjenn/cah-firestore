import React from 'react'
import classNames from 'classnames/bind'

import ProfilePic from 'Components/ProfilePic'

import styles from './styles.module.css'

const cx = classNames.bind(styles)

const Header = ({ user }) => {
  return (
    <div className={cx('Header')}>
      <div className={cx('Header--UserInfo')}>
        {user && <p className={cx('UserInfo--Name')}>{user.displayName}</p>}
        {user && <ProfilePic user={user} />}
      </div>
    </div>
  )
}

export default Header
