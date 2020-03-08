import React from 'react';
import './Risk.css';

const Risk = () => {
  return (
    <div className="recommendation-risks">
      <h4 style={{ marginBottom: '15px' }}>Risk:</h4>
      <p className="recommendation-text">
        You should be aware of the following risks attatched to your mortgage.
        You could loose your apartment or house if you don not keep up the
        repayments on this loan. you will be subject to a charge by the lender
        on early repayments within 2-year fixed rate period.
      </p>
    </div>
  );
};

export default Risk;
