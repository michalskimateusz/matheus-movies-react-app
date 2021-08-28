import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>MatheusApp</div>
      <div className={styles.input}>
        <SearchInput/>
      </div>
      <div className={styles.links}></div>
    </div>
    );
}
 
export default TopBar;