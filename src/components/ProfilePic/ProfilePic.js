import React from 'react'
import classNames from 'classnames/bind'

import styles from './styles.modules.css'

const cx = classNames.bind(styles)

const ProfilePic = ({ user }) => {
  return (
    <div className={cx('ProfilePic')}>
      <img
        className={cx('ProfilePic--Image')}
        src={user.photoUrl}
        alt={user.email}
      />
    </div>
  )
}

export default ProfilePic
