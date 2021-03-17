import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/moviesAction';
import { addOrder, fetchOrders, deleteOrder } from '../../actions/ordersAction';
import {
  Spinner,
  MovieList,
  InfoSection,
  SearchBar,
} from '../../components/index';
import {
  ErrorMessage,
  SpinnerContainer,
  Line,
  Container,
} from '../../globalStyles';
import { MovieListContainer } from '../../components/MovieList/MovieList.elements';

const Homepage = () => {
  const { loading, error, movies } = useSelector((state) => state.movies);
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleOrderAdd = async (title, poster_path, price, movieId) => {
    const OrderDetail = {
      title,
      poster_path,
      price,
      click: true,
      movieId,
    };
    await dispatch(addOrder(OrderDetail));
    await dispatch(fetchOrders());
  };

  const handleDeleteOrder = async (movieId) => {
    const objOrder = orders.filter((order) => order.movieId === movieId);
    const id = objOrder[0].id;
    await dispatch(deleteOrder(id));
    await dispatch(fetchOrders());
  };

  return (
    <>
      <Container>
        <InfoSection />
        <Line />
        <SearchBar />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}

        <MovieListContainer>
          {movies?.results &&
            movies.results
              .slice(0, 8)
              .map((movie) => (
                <MovieList
                  key={movie.id}
                  movie={movie}
                  addMovie={handleOrderAdd}
                  orders={orders}
                  deleteOrder={handleDeleteOrder}
                />
              ))}
        </MovieListContainer>
      </Container>
    </>
  );
};

export default Homepage;
