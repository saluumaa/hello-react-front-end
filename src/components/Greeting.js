import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/message/greetingSlice';

const Greeting = () => {
  const {
    greeting, isFetched, isLoading, hasError, error,
  } = useSelector((store) => store.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchGreeting());
    }
  }, [dispatch, isFetched]);

  if (isLoading) return <h1 className="loading">... Is Loading</h1>;
  if (hasError) {
    return (
      <h1 className="error">
        An error has ocured:
        {error}
      </h1>
    );
  }

  return <h1 className="greeting">{greeting}</h1>;
};

export default Greeting;
