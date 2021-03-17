import React, { useState } from 'react';
import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchBarText,
  IconWrapper,
  SearchBarIcon,
} from './SearchBar.elements';
import { fetchMovies } from '../../actions/moviesAction';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSetSearch = (e) => {
    setText(e.target.value);
  };

  const handleMovieSearch = (text) => {
    dispatch(fetchMovies(text));
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarWrapper>
          <SearchBarText
            placeholder="search movies"
            value={text}
            onChange={handleSetSearch}
          ></SearchBarText>
          <IconWrapper onClick={() => handleMovieSearch(text)}>
            <SearchBarIcon />
          </IconWrapper>
        </SearchBarWrapper>
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
