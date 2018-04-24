import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Bienvenido a tu chat!</h1>
        <p className="lead">Aquí encontrarás gente con quién chatear</p>
       
      </Jumbotron>
    </div>
  );
};

export default Example;