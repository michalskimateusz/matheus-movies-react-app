import React from 'react';
import styles from './CategoryHeader.module.scss';

const CategoryHeader = ({category, text}) => {
  return (
    <div className={styles.root}>
      <div className={styles.line}/>
      <h2 className={styles.header}>
        {category}
      </h2>
      <p className={styles.text}>
        {text}
      </p>
    </div>
   );  
}
 
export default CategoryHeader;
