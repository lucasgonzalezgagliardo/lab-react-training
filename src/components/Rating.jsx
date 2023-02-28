import React from 'react';

const Rating = ({ children }) => {
  const rating = Math.round(children);

  return (
    <div>
      {[...Array(rating)].map((_, i) => (
        <span key={i} role="img" aria-label="Estrella llena">
          &#9733;
        </span>
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <span key={i + rating} role="img" aria-label="Estrella vacía">
          &#9734;
        </span>
      ))}
    </div>
  );
};

export default Rating;
