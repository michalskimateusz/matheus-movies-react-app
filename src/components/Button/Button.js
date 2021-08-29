import React from 'react';
import styles from './Button.module.scss';

const Button = ({children}) => {
  return (
    <div className={styles.root}>
      <div className={styles.button}>
        {children}
      </div>
    </div>
   );
}
 
export default Button;