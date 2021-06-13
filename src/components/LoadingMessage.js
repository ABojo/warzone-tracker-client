import Heading from './Heading';
import Spinner from './Spinner';
import React from 'react';

function LoadingMessage() {
  return (
    <React.Fragment>
      <Heading headingText="Loading data..." />
      <Spinner colorClass="text-purple-500" />
    </React.Fragment>
  );
}

export default LoadingMessage;
