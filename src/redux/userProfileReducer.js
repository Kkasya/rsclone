import initialState from './initialState';

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_ISLOGGED':
      return { ...state, auth: { loggedIn: action.loggedIn, userProfile: action.value } };
      break;

    default: return state;
  }
};

export default userProfileReducer;
