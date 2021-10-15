import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector((state) => state.home);

  console.log(data);
  return (
    <div>
      <h5></h5>
    </div>
  )
}