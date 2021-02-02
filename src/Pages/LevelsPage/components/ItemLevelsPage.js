import React from 'react';
import { Button } from '@material-ui/core/';
import stylesCommon from '../../../common/styles/stylesCommon';
import stylesLevelsPage from '../stylesLevelsPage';

export default function ItemLevelsPage({ name }) {
  const commonStyles = stylesCommon();
  const useStyles = stylesLevelsPage();
  return (
    <div className={useStyles.containerButtonsLevels}>
      <Button
        variant='contained'
        className={commonStyles.button}
      >
        {name}
      </Button>
    </div>
  );
}
