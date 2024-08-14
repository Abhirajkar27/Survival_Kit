import React, { createContext, useState } from "react";

const SK_Context = createContext();

const SK_Provider = ({ children }) => {
    const [noteTextareaValue, setNoteTextareaValue] = useState('');

    return (
        <SK_Context.Provider
            value={{
                noteTextareaValue, 
                setNoteTextareaValue,
            }}
        >
            {children}
        </SK_Context.Provider>
    );
};

export { SK_Context, SK_Provider };