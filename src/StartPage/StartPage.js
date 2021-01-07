import React from 'react';
import styles from '../common/styles/styles';

export default function StartPage() {
  const commonStyles = styles();
  return (
    <div className={commonStyles.startPage}>
      <h1>StartPage</h1>
    </div>
  );
}
