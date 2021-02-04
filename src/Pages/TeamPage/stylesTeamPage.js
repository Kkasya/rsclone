import {makeStyles} from "@material-ui/core";

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

  role: {
    fontSize: '1.1rem',
    margin: '0 0 0.5rem 0',
    fontWeight: '600',
  },

  aboutMember: {
    margin: '0',
    textAlign: 'justify',
  },

  footerTeamYear: {
    margin: '0 16px 0 0',
    fontSize: '24px',
  },

  icon: {
    height: '2rem',
  },
});

export default stylesTeamPage;
