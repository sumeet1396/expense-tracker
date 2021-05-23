import React from 'react';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
          <Button onClick={props.onConfirm}>X</Button>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
