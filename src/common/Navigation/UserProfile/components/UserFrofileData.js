import React from 'react';
import stylesUserProfile from '../UserProfileStyles';
import Logout from '../../../Logout/Logout'

export default function Profile(props) {
  const profileStyles = stylesUserProfile();
  const userProfile = props.userData;

  return (
    <div className={profileStyles.userProfile_container}>
      <div className={profileStyles.userAvatar}>
        <img src={userProfile.photoUrl} alt='user avatar' />
      </div>
      <div className={profileStyles.userNameANdLogout}>
        <div className={profileStyles.userName}>
          <span>{userProfile.firstName}</span>
          <span>{userProfile.lastName}</span>
        </div>
        <Logout />
      </div>
    </div>
  )
}