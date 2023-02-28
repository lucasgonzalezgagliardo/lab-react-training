import React from 'react';

function Greetings(props) {
    const greetings = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
    };
  
    return (
      <div className="Iteration2">
        {`${greetings[props.lang]} ${props.children}`}
      </div>
    );
  }

export default Greetings;
