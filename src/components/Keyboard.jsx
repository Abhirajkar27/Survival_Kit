import React, { useContext } from 'react';
import './Keyboard.css';
import { SK_Context } from '../context/context';
import { FaBackspace } from 'react-icons/fa'; // Import icons

const EmojiKeyboard = ({ onEmojiClick, onSpaceClick, onDeleteClick, refr }) => {
    const { emoji } = useContext(SK_Context);

    return (
        <div className="emoji-keyboard" ref={refr}>
            <div className="emoji-list">
                {emoji.map((emoj, index) => (
                    <button key={index} onClick={() => onEmojiClick(emoj)} className="emoji-button">
                        {emoj}
                    </button>
                ))}
                <div className='special-btn_EK'>
                <button onClick={onSpaceClick} className="control-button space_EK">
                    {/* <FaSpaceShuttle className="control-icon" /> */}
                    space
                </button>
                <button onClick={onDeleteClick} className="control-button delete_EK">
                    <FaBackspace  style={{ color: 'white' }} className="control-icon" />
                </button>
                </div>
            </div>
        </div>
    );
};

export default EmojiKeyboard;
