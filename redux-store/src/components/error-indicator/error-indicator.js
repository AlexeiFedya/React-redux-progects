import React from 'react';

import './error-indicator.css';
import icon from './error-indicator.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span>
        SOMETHING HAS GONE TERRIBLY WRONG
      </span>
    </div>
  );
};

export default ErrorIndicator;
