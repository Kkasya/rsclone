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
};

const settingsReducer = (state = initialState, action) => {
  let target = null;
  try {
    target = action.payload.nativeEvent.target;
  } catch (e) { }

  switch (action.type) {

    case 'TOGGLE_SETTINGS':
      const newSettings = state.settings.slice();
      const index = newSettings.findIndex(item => item.id === target.name);
      newSettings[index].state = target.checked;
      return { ...state, settings: [...newSettings] }

    case 'TOGGLE_LANG':
      const newLang = target.value || target.parentNode.value;
      if (newLang && newLang !== state.lang) {
        return { ...state, lang: newLang }
      }
      break;

    default: return state;
  }
};

export default settingsReducer;
