import React, { useState, useEffect } from 'react';
import { toggleIsLogged } from '../../redux/actions';
import store from '../../redux/authStore';
import AuthModal from './components/AuthModal';

function getUserData(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.json);
    })
    .catch((answer) => false);
}

export default function LoginContent(props) {
  const modalText = props.modalText;
  const isLoginButton = props.isLoginButton;
  const urlUserData = '/auth/user';
  const [userProfileData, setUserProfileData] = useState({});
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    let cleanupFunction = false;
    async function fetchData() {
      let pages = getUserData(urlUserData);
      pages.then((userData) => {
        if (!cleanupFunction) {
          setUserProfileData(userData);
          userData.id ? setIsLogined(true) : setIsLogined(false);
        }
      });
    }
    fetchData();
    return () => cleanupFunction = true;
  }, []);

  const auth = {
    loggedIn: isLogined,
    userProfile: userProfileData
  }

  store.dispatch(toggleIsLogged(auth));

  return (
    <AuthModal modalText={modalText} isLoginButton={isLoginButton} />
  );
}