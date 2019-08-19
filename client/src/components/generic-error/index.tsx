import React from 'react';

const GenericError: React.FC<any> = props => {
  return (
    <div>
      <h1 className="text-center text-danger">{props.title}</h1>
      <div className="text-center mt-5">{props.message}</div>
    </div>
  );
};

export default GenericError;
