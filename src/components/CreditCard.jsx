import React from 'react';
import imgVisa from '../assets/images/visa.png'
import imgMaster from '../assets/images/master-card.svg'


const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  const ultimosCuatro = number.slice(-4);
  
  
  const cardStyle = {
      backgroundColor: bgColor,
      color: color,
      borderRadius: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '200px',
      width: '400px',
      logoImage: '100px',
    };
    
    return (
        <div style={cardStyle}>
        {type === 'Visa'
          ? <img className= "w-25" src={imgVisa} alt="visa"/>
          : <img className= "w-25" src={imgMaster} alt="master"/>}
      <div>
      {`⦿`.repeat(12)} {ultimosCuatro}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p style={{ margin: 0 }}>Expires {expirationMonth}/{expirationYear % 100}</p>
          <p style={{ margin: 0 }}>{bank}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: 0 }}>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
