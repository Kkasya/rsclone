import React, { useState } from 'react';
import ProfileUser from './components/UserFrofileData';
import store from '../../../redux/authStore';
import LoginModal from '../../Login/LoginModal';

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  store.subscribe(() => {
    const storeData = store.getState();
    setUserProfile(storeData.auth.userProfile);
    storeData.auth.userProfile.id ? setIsLogged(true) : setIsLogged(false);
  });

  return (
    <div>
      {
        isLogged ? <ProfileUser userData={userProfile} /> : <LoginModal modalText='Login in the game use google auth:' isLoginButton={true} />
      }
    </div>
  );
}
