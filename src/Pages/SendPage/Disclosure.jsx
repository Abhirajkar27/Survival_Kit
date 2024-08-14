import React, { useEffect, useState } from 'react';
import './Disclosure.css'; 
import imag from '../../assets/img/Boxes3.png';

const Disclosure = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleCopy = () => {
    const url = `https://survival-kit2.netlify.app/?activityId=${props.activityId}`;
    navigator.clipboard.writeText(url)
      .then(() => setCopyFeedback('Copied!'))
      .catch(() => setCopyFeedback('Copy failed. Please try again.'));
  };

  return (
    <div className="container_SK">
      <div className="copy-box_SK">
        <div className="copy-text_SK">
          {`https://survival-kit2.netlify.app/?activityId=${props.activityId}`}
        </div>
        <button className="copy-button_SK" onClick={handleCopy}>
          Copy
        </button>
        {copyFeedback && <div className="copy-feedback_SK">{copyFeedback}</div>}
      </div>
      {!showMessage ? (
        <div className="oscillate_SK">
          <img src={imag} alt="Oscillating" className="image_SK" />
        </div>
      ) : (
        <>
          <div className="message-container_SK">
            <div className="main-message_SK">Nailed It!😍</div>
            <div className="sub-message_SK">Activity sent to Rahul</div>
          </div>
          <button className={`nxtbtntp_SK`} onClick={()=>console.log(9)} ><span className={`nxtbtntp-txt_SK`}>Continue</span></button>
        </>
      )}
    </div>
  );
};

export default Disclosure;