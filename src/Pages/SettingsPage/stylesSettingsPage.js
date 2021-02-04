import { makeStyles } from '@material-ui/core';

const stylesSettingsPage = makeStyles({
  settingsPage: {
    margin: 'auto',
    alignItems: 'center',
    padding: '20px',
  },

  settingsCheckboxes: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',

  },

  itemCheckboxes: {
    '& *': {
      fontSize: '25px',
    }
  }
});

export default stylesSettingsPage;
