import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './MovieList.module.scss';

const MovieList = ({movies}) => {
  
  return (
    <div className={styles.root}>
      {movies.map(movie =>
        <div
          key={movie.imdbID}
          className={styles.item}
        >
          <MovieCard
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        </div>)
      }
    </div>
   );
}

const mapStateToProps = ({app}) => ({
  movies: app.movies
})
 
export default connect(mapStateToProps)(MovieList);