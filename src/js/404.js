import React from 'react';
import '../css/Error.css';

export default class Error404 extends React.Component {
  render() {
    return (
      <div>
        <div className="error-div text-center">
          <h1>Error 404</h1>
        </div>
        <div className="text-center">
          <h5>This page cannot be found as her heart <span role="img" aria-label="BreakHearth">💔</span>.</h5>
        </div>
      </div>
    )
  }
}