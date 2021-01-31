import React from 'react';
import stylesLogoutBtn from './LogoutBtnStyles';
import { toggleIsLogged } from '../../redux/actions';
import store from '../../redux/authStore';
import AuthModal from '../Login/components/AuthModal'

function googleLogout(urlPath) {
  return fetch(urlPath)
    .then((response) => {
      if (response.ok) {
        return true;
      }
      return Promise.reject(response.json);
    })
    .catch(() => false);
}

export default function Logout() {
  const useStyles = stylesLogoutBtn();
  const urlLogout = '/auth/logout';

  let logout = () => {
    if (googleLogout(urlLogout)) {
      const auth = {
        loggedIn: false,
        userProfile: {}
      }

      store.dispatch(toggleIsLogged(auth));
    } else {
      return (<AuthModal modalText='Failed to logout! Please, try again.' isLoginButton={false} />)
    }
  }

  return (
    <button className={useStyles.logoutButton} onClick={logout}>Logout</button>
  )
}