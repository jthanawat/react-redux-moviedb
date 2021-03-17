import React, { useState, useEffect } from 'react';
import { MovieListItem, MovieListImg, MovieText } from './MovieList.elements';
import noPoster from '../../images/image2.jpg';
import { Button } from '../../globalStyles';
import { NumberFormat } from '../../helpers/index';

const MovieList = ({ movie, addMovie, orders, deleteOrder }) => {
  const [click, setClick] = useState(false);
  const updatedPrice = { ...movie, price: Math.floor(Math.random() * 100) };

  useEffect(() => {
    const handleChangeButton = () => {
      const order = orders.filter((order) => order.movieId === movie.id);
      setClick(order.length > 0 ? true : false);
    };
    handleChangeButton();
  }, []);

  return (
    <>
      <MovieListItem>
        <MovieListImg
          src={
            movie.poster_path === null
              ? noPoster
              : `${process.env.REACT_APP_DOMAIN + movie.poster_path}`
          }
          alt={movie.title}
          $border={movie.poster_path}
        />
        <MovieText>{movie.title}</MovieText>
        <MovieText>{NumberFormat.format(updatedPrice.price)}</MovieText>
        {click ? (
          <Button
            onClick={() => {
              deleteOrder(movie.id);
              setClick(false);
            }}
          >
            In Cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              addMovie(
                movie.title,
                movie.poster_path,
                updatedPrice.price,
                movie.id
              );
              setClick(true);
            }}
          >
            Add to Cart
          </Button>
        )}
      </MovieListItem>
    </>
  );
};

export default MovieList;
