import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './MovieList.module.scss';

const MovieList = ({movies}) => {
  
  return (
    <div className={styles.root}>
      {movies.map(movie => (
        <MovieCard
            key={movie.imdbID}
            id={movie.imdbID}
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
      ))}
    </div>
   );
}

const mapStateToProps = ({app}) => ({
  movies: app.movies
})
 
export default connect(mapStateToProps)(MovieList);