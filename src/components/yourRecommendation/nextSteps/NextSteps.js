import React from 'react';
import './NextSteps.css';
import Alison from '../img/Alison.PNG';

const NextSteps = () => {
  return (
    <div className="recommendation-nextSteps">
      <h4 style={{ marginBottom: '15px' }}>Next Steps:</h4>
      <p className="recommendation-text">
        If you are happy you fully understand our recommendation and happy to
        proceed, we will now aproach bank Y with your application and the
        supporting documents you have provided us. Please print, sign and upload
        this document at your convenience so we have a record of you approval.
      </p>
      <p className="recommendation-text">
        Should you require further information regarding this recommendation
        please do not hesitate to contact me.
      </p>
      <h4 style={{ marginBottom: '15px' }}>Yours Sincerely,</h4>
      <img src={Alison} />
    </div>
  );
};

export default NextSteps;
