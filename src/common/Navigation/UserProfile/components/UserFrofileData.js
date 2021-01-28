import React from 'react';
import stylesUserProfile from '../UserProfileStyles';

function googleLogout(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      if (response.ok) {
        return true;
      }
      return Promise.reject(response.json);
    })
    .catch((answer) => false);
}

export default function HelpElements(props) {
  const profileStyles = stylesUserProfile();
  const userProfile = props.userData;
  const urlLogout = '/auth/logout';

  let logout = () => {
    if (googleLogout(urlLogout)) {
      document.getElementById('login-modal_container').classList.remove('hidden');
      document.getElementById('login-modal-text').innerText = 'Sign in using your google account:';
    } else {
      handleLogoutFailure();
    }
  }

  let handleLogoutFailure = () => {
    alert('Failed to log out')
  }

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
        <button className={profileStyles.logoutButton} onClick={logout}>Logout</button>
      </div>
    </div>
  )
}