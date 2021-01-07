import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/ButtonBase';
import {makeStyles} from "@material-ui/core";
import {ItemLevelsPage} from './ItemLevelsPage'
import {styles} from "../../common/styles";

const useStyles = makeStyles({
  btnClear: {
    background: 'linear-gradient(45deg, #375fa1 30%, #689cf2 90%)',
    width: '18rem',
    margin: '3rem',
    'font-size': '2.5rem',
  },

  heightFull: {
     height: '100vh',
  }
});

export function LevelsPage(props) {
  const classes = useStyles();
  const commonStyle = styles();
  const {title, variant, itemList, color} = props;
  const [passedLevels, setPassedLevels] = useState(itemList);

  const addPassedLevel = (level) => {
    const newPassedLevels = passedLevels.concat();
    newPassedLevels.forEach((item) => {
      if ((item.name === level) && (item.isReady === 'false')) item.isReady = 'true';
    })
    setPassedLevels(newPassedLevels);
  }

  const clearPassedLevel = () => {
    const newPassedLevels = passedLevels.concat();
    newPassedLevels.forEach((item) => item.isReady = 'false');
    setPassedLevels(newPassedLevels);
  }

  useEffect(() => {
    itemList.map((item) => addItemLevel(item));
  });

  function addItemLevel(item) {
    return (
      <ItemLevelsPage
        name={item.name}
        passedLevel={item.isReady}
        key={item.id}
      />
    )
  }

  const containerLevels = `${commonStyle.flexWrapper} ${classes.heightFull}`;
  const btnClear = `${commonStyle.btn} ${classes.btnClear}`;

  return (
    <div className={commonStyle.pageWrapper}>
      <Typography variant={variant} color={color}>{title}</Typography>
      <div className={containerLevels}>
        {itemList.map((item) => addItemLevel(item))}
      </div>
      <div className={commonStyle.flexBtns}>
        <Button className={btnClear} onClick={() => clearPassedLevel()}>
          <p>Reset progress</p>
        </Button>
      </div>
    </div>
  );
}