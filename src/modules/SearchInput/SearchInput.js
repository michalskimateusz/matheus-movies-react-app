import React, { useState } from 'react';
import styles from './SearchInput.module.scss';
import Svg from '../../components/Svg/Svg';
import { iconSearch } from '../../assets/svg/svg';
import { connect } from 'react-redux';
import { setQuery, setMovies, setPageNumber } from '../../store/reducers/appSlice/appSlice';
import api from '../../services/api';

const SearchInput = ({
  page,
  setPageNumberAction,
  setQueryAction,
  setMoviesAction
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = () => {
    setPageNumberAction(1);

    return api.get('', {
      params: {
        s: searchTerm,
        type: 'movie',
        page
      }
    }).then(({ data }) => {
      console.log(data.Search);
      setMoviesAction(data.Search)
    })
      .finally(() => {
        setPageNumberAction(page + 1);
        setSearchTerm('')
      });
  }

  const onSubmit = e => {
    e.preventDefault();
    if (!searchTerm) {
      return
    }
    setQueryAction(searchTerm)
    getMovies();
  }

  const onChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <form
      className={styles.root}
      onSubmit={onSubmit}
    >
      <Svg 
        icon={iconSearch}
        size={1.3}
        svgClassName={styles.svg}
      />
      <input
        name='search'
        className={styles.input}
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={onChange}
      />      
    </form>
  );
}

const mapStateToProps = ({ app }) => ({
  page: app.page
});

const mapDispatchToProps = {
  setMoviesAction: setMovies,
  setQueryAction: setQuery,
  setPageNumberAction: setPageNumber
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);