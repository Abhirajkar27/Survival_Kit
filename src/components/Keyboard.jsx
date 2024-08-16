import React, { useContext} from 'react';
import './Keyboard.css';
import { SK_Context } from '../context/context';

const EmojiKeyboard = ({ onEmojiClick, onSpaceClick, onDeleteClick, refr }) => {
    const {emoji}=useContext(SK_Context);
    return (
        <div className="emoji-keyboard" ref={refr}>
            <div className="emoji-list">
                {emoji.map((emoj, index) => (
                    <button key={index} onClick={() => onEmojiClick(emoj)} className="emoji-button">
                        {emoj}
                    </button>
                ))}
            </div>
            <div className="keyboard-controls">
                <button onClick={onSpaceClick} className="control-button">Space</button>
                <button onClick={onDeleteClick} className="control-button">Delete</button>
            </div>
        </div>
    );
};

export default EmojiKeyboard;
