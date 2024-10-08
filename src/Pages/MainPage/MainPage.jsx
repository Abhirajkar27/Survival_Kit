import React, { useContext, useEffect, useRef, useState } from 'react';
import emojiRegex from 'emoji-regex';
import './MainPage.css';
import SK_box from '../../assets/img/Survival_Box.png';
import { SK_Context } from '../../context/context';
import EmojiKeyboard from '../../components/Keyboard';

const MainPage = (props) => {
  const { survivalAns, handleInput_SK, survivalQues,
    survivalPlace, setSurvivalAns } = useContext(SK_Context);

  const [showKeyboard, setShowKeyboard] = useState(false);
  const textareaRef = useRef(null);
  const keyboardRef = useRef(null);

  const handleTextareaClick = () => {
    setShowKeyboard(true);
  };

  const handleSpaceClick = () => {
    if(survivalAns.length===0){
      console.log("can not enter text at starting")
    }
    else{
      setSurvivalAns(prev => prev + ' ');
    }
  };

  const handleDeleteClick = () => {
    const regex = emojiRegex();
    const trimmedInput = survivalAns.trimEnd(); // Remove trailing spaces
  
    // Check if the last character is a space
    if (survivalAns.endsWith(' ')) {
      // Remove the trailing space
      setSurvivalAns(prev => prev.slice(0, -1));
    } else {
      // Remove last emoji if present
      const result = [...trimmedInput.matchAll(regex)];
      
      if (result.length) {
        const lastEmojiIndex = result[result.length - 1].index;
        setSurvivalAns(trimmedInput.slice(0, lastEmojiIndex));
      } else {
        // If no emojis are present, remove the last character
        setSurvivalAns(prev => prev.slice(0, -1));
      }
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        keyboardRef.current &&
        !keyboardRef.current.contains(event.target) &&
        textareaRef.current &&
        !textareaRef.current.contains(event.target)
      ) {
        setShowKeyboard(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className='SK_MainPage'>
      <svg onClick={props.onClose} className='SK_bk_Btn' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z" fill="white" />
      </svg>
      <div className='survival_box'>
        <img src={SK_box} />
        <div>
          <div className="sk_boxhead">Survival Kit ⛑️</div>
          <div className="sk_boxsubhead">{survivalQues}</div>
          <div className='Sk_topic'>{survivalPlace}</div>
          <div className='newSelectbtn_SK'>
            <svg className='newSelectIcon_SK' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M14.7926 10.9428C14.6684 10.8788 14.5256 10.8608 14.3893 10.8917C14.2531 10.9227 14.1321 11.0007 14.0477 11.1121C13.9633 11.2234 13.9209 11.361 13.9279 11.5005C13.9349 11.64 13.9909 11.7726 14.086 11.875L14.9529 12.5221H12.7798C12.1799 12.5163 11.5889 12.3768 11.0497 12.1139C10.5105 11.851 10.0366 11.4712 9.66259 11.0021C9.60918 10.9448 9.54501 10.8986 9.47373 10.8661C9.40245 10.8336 9.32547 10.8154 9.24718 10.8127C9.08906 10.8071 8.93521 10.8646 8.81947 10.9725C8.70373 11.0803 8.63558 11.2298 8.63001 11.3879C8.62444 11.546 8.68191 11.6998 8.78978 11.8156C9.27447 12.4187 9.88961 12.9041 10.5889 13.2353C11.2883 13.5664 12.0536 13.7347 12.8273 13.7275H14.9529L14.086 14.3746C13.9733 14.4729 13.9018 14.61 13.8858 14.7587C13.8698 14.9074 13.9105 15.0566 13.9997 15.1766C14.089 15.2966 14.2202 15.3785 14.3672 15.4059C14.5141 15.4334 14.6661 15.4043 14.7926 15.3246L17.1023 13.6087C17.176 13.5534 17.2359 13.4817 17.2771 13.3992C17.3183 13.3168 17.3398 13.2259 17.3398 13.1337C17.3398 13.0415 17.3183 12.9506 17.2771 12.8682C17.2359 12.7857 17.176 12.714 17.1023 12.6587L14.7926 10.9428Z" fill="#0E1928" />
              <path d="M12.7307 6.57347C12.7617 6.56456 12.7947 6.56456 12.8257 6.57347H15.0404L14.0666 7.34534C13.943 7.44298 13.8633 7.58572 13.8449 7.74216C13.8265 7.89861 13.871 8.05595 13.9687 8.17956C14.0663 8.30318 14.2091 8.38295 14.3655 8.40132C14.5219 8.41969 14.6793 8.37516 14.8029 8.27753L17.1126 6.44284C17.1819 6.38721 17.2379 6.31671 17.2764 6.23655C17.3148 6.15639 17.3348 6.06862 17.3348 5.97972C17.3348 5.89081 17.3148 5.80304 17.2764 5.72288C17.2379 5.64273 17.1819 5.57223 17.1126 5.51659L14.8029 3.68191C14.6793 3.58427 14.5219 3.53975 14.3655 3.55812C14.2091 3.57649 14.0663 3.65626 13.9687 3.77987C13.871 3.90349 13.8265 4.06083 13.8449 4.21727C13.8633 4.37372 13.943 4.51646 14.0666 4.61409L15.0404 5.38597H12.8257C10.5279 5.33847 9.06133 6.84066 7.93321 8.56253C6.63883 6.53191 5.15446 4.22816 2.25696 4.22816C2.09949 4.22816 1.94846 4.29071 1.83711 4.40206C1.72576 4.51341 1.66321 4.66443 1.66321 4.82191C1.66321 4.97938 1.72576 5.1304 1.83711 5.24175C1.94846 5.3531 2.09949 5.41566 2.25696 5.41566C4.69133 5.41566 5.93821 7.63628 7.23852 9.68472C5.93821 11.8757 4.6854 14.2863 2.25696 14.2507C2.09949 14.2507 1.94846 14.3132 1.83711 14.4246C1.72576 14.5359 1.66321 14.6869 1.66321 14.8444C1.66321 15.0019 1.72576 15.1529 1.83711 15.2643C1.94846 15.3756 2.09949 15.4382 2.25696 15.4382C7.87383 15.4916 7.79071 6.77534 12.7307 6.57347Z" fill="#0E1928" />
            </svg>
            <span className="newSelectText_SK">Get a new topic</span>
          </div>
        </div>
      </div>
      <textarea style={{ resize: "none" }}
        ref={textareaRef}
        className="survival_area"
        placeholder='Enter Emojis'
        value={survivalAns}
        onClick={handleTextareaClick}
        readOnly
      ></textarea>
      {showKeyboard && (
        <EmojiKeyboard
          refr={keyboardRef}
          onEmojiClick={handleInput_SK}
          onSpaceClick={handleSpaceClick}
          onDeleteClick={handleDeleteClick}
        />
      )}
      {!showKeyboard && <button onClick={survivalAns ? props.onforw : null} className='forw_main_btn'><span style={{ opacity: survivalAns ? '1' : '.3' }}>Next</span></button>}
    </div>
  )
}

export default MainPage
