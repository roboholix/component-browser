import React from 'react';

function Welcome() {
  return(
    <div className="welcome-page">
      <div className="welcome-page__message-container">
        <div className="welcome-page__message">Welcome to the component browser</div>
        <div className="welcome-page__message">
          Component examples and code can be viewed by selecting a component listed in the menu to the left
        </div>
      </div>
    </div>
  );
}

export default Welcome;