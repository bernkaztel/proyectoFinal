import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="jumbo-pack font-family">
        <h3>Elige el tipo de sala al que deseas entrar</h3>
        <h6>Sala Normal</h6>
        <p className="lead font-family">Es una sala normal en donde puedes conocer genter normal por 20 pesos al mes</p>
        <h6>Sala Premium</h6>
        <p className="lead font-family">Es una sala en donde puedes conocer gente Premium por 200 pesos al mes</p>
        <h6>Sala VIP</h6>
        <p className="lead font-family">Es la sala de gente VIP por 2000 pesos al mes.</p>
      </Jumbotron>
    </div>
  );
};

export default Example;
