import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="Iteration1">
      <p><strong> First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Height:</strong> {height}</p>
      <p><strong>Birth:</strong> {`${birth.getDate()}/${birth.getMonth() + 1}/${birth.getFullYear()}`}</p>
      <img src={picture} height="100px" width="100px" alt={lastName}></img>
    </div>
  );
}
export default IdCard;
