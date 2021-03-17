import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { loading: true, error: null, movies: [] };
    case FETCH_MOVIES_SUCCESS:
      return {
        loading: false,
        error: null,
        movies: action.payload,
      };
    case FETCH_MOVIES_ERROR:
      return { loading: true, error: action.payload, movies: [] };
    default:
      return state;
  }
};

export default moviesReducer;
