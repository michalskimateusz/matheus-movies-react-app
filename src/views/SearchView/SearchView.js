import React, { useEffect } from 'react';
import api from '../../services/api';
import styles from './SearchView.module.scss';
import { connect } from 'react-redux';
import { setMovies, setPageNumber } from '../../store/reducers/appSlice/appSlice';
import MovieList from '../../modules/MovieList/MovieList';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopBar from '../../modules/TopBar/TopBar';
import CategoryHeader from '../../components/Button/CategoryHeader/CategoryHeader';

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
    }).then(({ data }) => {
      if (!data.Search) {
        return setMoviesAction([]);
      }
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
      <TopBar />
      <CategoryHeader category="Your Movies"/>
      {!movies || movies.length === 0 ? (
       <div>No results</div> 
      ): (
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore={true}
        loader={'Scroll down for more'}
        endMessage={'There are no more movies to find'}
      >
        <MovieList />
      </InfiniteScroll> 
      )}
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