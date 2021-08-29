import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import styles from './TopBar.module.scss';

const TopBar = ({isMovieDetails}) => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>MatheusApp</div>
      {isMovieDetails ? (
        <Link className={styles.goBack} to="/" >&#8249; Go back</Link>
      ): (
      <div className={styles.input}>
        <SearchInput/>
      </div>
      )}
      
      <div className={styles.links}></div>
    </div>
    );
}
 
export default TopBar;