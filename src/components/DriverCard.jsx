import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const roundedRating = Math.round(rating);
  const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);

  return (
    <div style={{ 
      display: 'flex',
      width: '1000px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: 'rgb(43, 15, 120)',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px',
      color: 'white'
    }}>
      <img src={img} alt="driver" style={{ 
        width: '100px', 
        height: '100px', 
        borderRadius: '50%',
        marginRight: '20px'
      }} />
      <div>
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
