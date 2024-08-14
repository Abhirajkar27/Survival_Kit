import React, { useState } from 'react';
import './AddNote.css';

const AddNote = (props) => {
  

  const handleTextareaChange = (e) => {
    const value = e.target.value;
    props.setNoteTextareaValue(value);

    e.target.style.height = 'auto';
    let newHeight = e.target.scrollHeight;

    if (newHeight > 176) {
      newHeight = 176;
     
      const truncatedValue = value.substring(0, e.target.selectionStart - 1);
      props.setNoteTextareaValue(truncatedValue);
    }

    e.target.style.height = `${newHeight}px`;
  };

  return (
    <div>
      <textarea
        className='Lie_AddNoteDC'
        placeholder='Add Note'
        value={props.noteTextareaValue}
        onChange={handleTextareaChange}
        rows={1}
        style={{ minHeight: '4.9vh', resize: 'none', overflow: 'hidden' }} 
      ></textarea>
    </div>
  );
};

export default AddNote;