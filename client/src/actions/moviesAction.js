import moviedb from '../apis/moviedb';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './types';

export const fetchMovies = (text) => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES,
  });

  try {
    const { data } = await moviedb.get('/movie/upcoming', {
      params: {
        api_key: `${process.env.REACT_APP_MOVIEDB_API_KEY}`,
        language: 'en-US',
        page: 1,
      },
    });

    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: data,
    });
    if (text) {
      const { data } = await moviedb.get('/search/movie', {
        params: {
          api_key: `${process.env.REACT_APP_MOVIEDB_API_KEY}`,
          query: text,
        },
      });
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_MOVIES_ERROR,
      payload: err.message,
    });
  }
};
