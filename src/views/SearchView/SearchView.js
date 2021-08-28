import React, { useEffect } from 'react';
import api from '../../services/api';
import styles from './SearchView.module.scss';
import { connect } from 'react-redux';
import { setMovies, setPageNumber } from '../../store/reducers/appSlice/appSlice';
import MovieList from '../../modules/MovieList/MovieList';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopBar from '../../modules/TopBar/TopBar';

const SearchView = ({ query, movies, setMoviesAction, page, setPageNumberAction }) => {
  console.log({
    movies,
  });

  const getMovies = () => {
    return api.get('', {
      params: {
        s: query,
        type: 'movie',
        page
      }
    }).then(({data}) => {
      console.log(data.Search);
      if (page === 1) {
        setMoviesAction(data.Search)
      }
      setMoviesAction([...movies, ...data.Search])
    })
      .finally(() => {
        setPageNumberAction(page+1)
      });
  }
  
  useEffect(() => {
    if (!movies || movies.length === 0) {
      setPageNumberAction(1)
      getMovies();
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  const fetchData = () => {
    getMovies();
  }

  return (
    <div className={styles.root}>
      <TopBar/>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore={true}
        loader={'Zara, Japa, Ide'}
        endMessage={'Wincyj nima'}
      >
        <MovieList />
      </InfiniteScroll>  
    </div>
   );
}

const mapStateToProps = ({ app }) => ({
  movies: app.movies,
  query: app.query,
  page: app.page
});

const mapDispatchToProps = {
  setMoviesAction: setMovies,
  setPageNumberAction: setPageNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);