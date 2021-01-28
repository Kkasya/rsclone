import React, { useState, useEffect } from 'react';
import ProfileUser from './components/UserFrofileData';

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

export default function UserProfile() {
  const urlUserData = '/auth/user';

  const [userProfile, setUserProfile] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let pages = getUserData(urlUserData);
      pages.then((userData) => {
        console.log(userData)
        setUserProfile(userData);
      })
    }
    fetchData();
  }, []);

  return (
    <div>
      {
        userProfile === false ? alert("Нет данных") : <ProfileUser userData={userProfile} />
      }
    </div>
  );
}
