import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/ButtonBase';
import {ItemLevelsPage} from './ItemLevelsPage'

const useStyles = makeStyles({
  listLevels: {
    display: 'flex',
    'flex-flow': 'column wrap',
    height: '100vh',
  },

  btnsLevelMenu: {
    display: 'flex',
    'justify-content': 'space-around',
  },

  footerLevels: {
    background: 'linear-gradient(45deg, #375fa1 30%, #689cf2 90%)',
    boxShadow: '0 3px 5px 2px rgba(91, 212, 252, .3)',
    width: '16rem',
    margin: '3rem',
    'font-size': '1.5rem',
    'border-radius': '1rem',
    outline: 'none',
    color: 'white',
  }
});

export function LevelsPage(props) {
  const [passedLevels, setPassedLevels] = useState([1, 2, 3]);

  const addPassedLevel = (level) => {
    if (!passedLevels.includes(level)) {
      const newPassedLevels = passedLevels.concat();
      newPassedLevels.push(level);
      setPassedLevels(newPassedLevels);
    }
  }

  const openPreviousScreen = () => {
    // open previous screen
  }

  const classes = useStyles();
  const {title, variant, itemList, name, color} = props;

  useEffect(() => {
    itemList.map((item, index) => addItemLevel(index + 1))
  });

  function addItemLevel(id) {
    return (
      <ItemLevelsPage
        name={name + ' ' + id}
        id={Number(id)}
        passedLevels={passedLevels.concat()}
      />
    )
  }

  return (
    <div>
      <Typography variant={variant} color={color}>{title}</Typography>
      <div className={classes.listLevels}>
        {itemList.map((item) => addItemLevel(item.id))}
      </div>
      <div className={classes.btnsLevelMenu}>
        <Button className={classes.footerLevels} key='left' onClick={() => setPassedLevels([])}>
          <p>Clear Checkmarks</p>
        </Button>
        <Button className={classes.footerLevels} key='right' onClick={() => openPreviousScreen}>
          <p>Previous Screen</p>
        </Button>
      </div>
    </div>
  );
}