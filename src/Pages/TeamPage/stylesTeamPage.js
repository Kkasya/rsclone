import { makeStyles } from "@material-ui/core";

const stylesTeamPage = makeStyles({
  contentWrapper: {
    padding: '7vh 0',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },

  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 30px 30px 30px',
    maxWidth: '30rem',
    minHeight: '25rem',
    flexDirection: 'column',

    borderRadius: '.8rem',
    backgroundColor: 'rgba(242, 242, 167, 0.3)',
    boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.6)',
  },

  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },

  nameMember: {
    marginRight: '10px',
    marginBottom: '-1px',
    fontSize: '1.2rem',
    transition: '.2s',
    borderBottom: '1px solid rgba(0, 0, 0, 0)',

    '&:hover': {
      color: 'rgba(0, 0, 0, 1)',
      borderBottom: '1px solid rgba(0, 0, 0, 1)',
    },
  },

  aboutMember: {
    margin: '0',
    textAlign: 'justify',
  },

  footerYear: {
    margin: '0 16px 0 0',
    fontSize: '24px',
  },

  icon: {
    height: '2rem',
  },
});

export default stylesTeamPage;
