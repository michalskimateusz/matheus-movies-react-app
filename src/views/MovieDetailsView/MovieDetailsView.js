import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../services/api';
import styles from './MovieDetailsView.module.scss';
import { connect } from 'react-redux';
import { setMovieDetails } from '../../store/reducers/appSlice/appSlice';
import TopBar from '../../modules/TopBar/TopBar';
import Svg from '../../components/Svg/Svg';
import { iconStar } from '../../assets/svg/svg';
import Button from '../../components/Button/Button';
import CategoryHeader from '../../components/Button/CategoryHeader/CategoryHeader';
import Rating from '../../components/Rating/Rating';

const starsArray = [1, 2, 3, 4, 5];

const MovieDetailsView = ({setMovieDetailsAction, movieDetails}) => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await api.get('', {
       params: {
         i: id,
         type: 'movie',
       }
      }).then(res => {
       console.log(res.data)
       return setMovieDetailsAction(res.data);
      });
    })();   
  }, [id, setMovieDetailsAction])

  return (
    <>
      {movieDetails && (
        <div className={styles.root}>
          <TopBar isMovieDetails/>
          <div className={styles.header}>
            <div className={styles.dataWrapper}>
              <p className={styles.year}>
                {movieDetails.Year}, {movieDetails.Genre}
              </p>
              <div className={styles.stars}>
                {starsArray.map(index => {
                  return (
                    <Svg
                      key={index}
                      icon={iconStar}
                      size={1.6}
                      svgClassName={styles.svg}
                    />
                  )
                })}
              </div>
              <h1 className={styles.title}>{movieDetails.Title}</h1>
                  <p className={styles.actors}>{movieDetails.Actors}</p>
                  <Button>watch</Button>
            </div>
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={movieDetails.Poster === 'N/A' ? 'https://yifyhdyify.com/img/default_thumbnail.svg' : movieDetails.Poster }/>
            </div>
          </div>
          <CategoryHeader category="Movie Details" text={movieDetails.Plot}/>
          <CategoryHeader category="Awards" text={movieDetails.Awards}/>
          <div className={styles.ratings}>
            {movieDetails.Ratings.map(rating => {
              return (
                <Rating
                  key={rating.value}
                  source={rating.Source}
                  value={rating.Value}
                />
                
              )
            })}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = ({ app }) => ({
  movieDetails: app.movieDetails
});

const mapDispatchToProps = {
  setMovieDetailsAction: setMovieDetails
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsView);