const initialState = {
  settings: [
    {
      id: 'areEffectsOn',
      state: true,
    },
    {
      id: 'isMusicOn',
      state: true,
    },
    {
      id: 'areTipsOn',
      state: true,
    },
  ],
  lang: 'en',
  auth: {
    loggedIn: 'false',
    userProfile: {
      id: '',
      imgUrl: '',
      userFirstName: '',
      userLastName: ''
    },
  }

};

export default initialState;
