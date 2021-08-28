import React from 'react';
import { iconStar } from '../../assets/svg/svg';
import Svg from '../Svg/Svg';
import styles from './MovieCard.module.scss';

const starsArray = [1, 2, 3, 4, 5];

const MovieCard = ({
  img,
  title,
  year
}) => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={img === 'N/A' ? 'https://yifyhdyify.com/img/default_thumbnail.svg' : img} alt={title}/>
      <div className={styles.year}>
        {year}
      </div>
      {starsArray.map((el, index)  => (
        <Svg
          key={index}
          icon={iconStar}
          size={1.6}
          svgClassName={styles.svg}
        />
      ))}
      <div className={styles.title}>
        {title}
      </div>
    </div>
   );
}
 
export default MovieCard;