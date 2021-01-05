import React from 'react';
import styles from '../common/styles/styles';

export default function MainPage() {
  const commonStyles = styles();
  return (
    <div className={commonStyles.mainPage}>
      <h1>MainPage</h1>
    </div>
  );
}
