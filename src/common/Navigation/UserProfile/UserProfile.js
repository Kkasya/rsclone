import React, { useState } from 'react';
import ProfileUser from './components/UserFrofileData';
import store from '../../../redux/authStore';
import LoginModal from '../../Login/Login';

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  store.subscribe(() => {
    const storeData = store.getState();
    setUserProfile(storeData.auth.userProfile);
    storeData.auth.userProfile.id ? setIsLogged(true) : setIsLogged(false);
  });

  if (isLogged) {
    return (
      <ProfileUser userData={userProfile} />
    );
  } else {
    return (
      <LoginModal modalText='Login to the game using google auth:' isLoginButton={true} />
    );
  }
}
