import React from 'react';
import { Link } from 'react-router-dom';
import { iconStar } from '../../assets/svg/svg';
import Svg from '../Svg/Svg';
import styles from './MovieCard.module.scss';
import getTitle from '../../utils/getTitle';

const starsArray = [1, 2, 3, 4, 5];

const MovieCard = ({
  id,
  img,
  title,
  year
}) => {
  return (
    <Link
      to={`/movie/${id}/details/${getTitle(title)}`}
      className={styles.root}
    >
      <img className={styles.img} src={img === 'N/A' ? 'https://yifyhdyify.com/img/default_thumbnail.svg' : img} alt={title}/>
      <div className={styles.year}>
        {year}
      </div>
      {starsArray.map(index  => (
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
    </Link>
   );
}
 
export default MovieCard;