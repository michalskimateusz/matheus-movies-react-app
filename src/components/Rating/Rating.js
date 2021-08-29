import React from 'react';
import styles from './Rating.module.scss';

const Rating = ({source, value}) => {
  return (
    <div className={styles.root}>
      <div className={styles.rating}>
        {value}
      </div>
      <div className={styles.source}>
        {source}
      </div>
    </div>
   );
}
 
export default Rating;