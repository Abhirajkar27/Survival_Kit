import React, { createContext, useState } from "react";

const SK_Context = createContext();

const SK_Provider = ({ children }) => {
    const [noteTextareaValue, setNoteTextareaValue] = useState('');
    const [survivalAns, setSurvivalAns] = useState('');


    function handleInput_SK(event) {
        let value = event.target.value;
        if (value.length > 26) {
            value = value.slice(0, 26);
        }
        const lineCount = value.split('\n').length;
        if (lineCount <= 4) {
            const trimmedValue = value.replace(/^\s+/g, '');
            setSurvivalAns(trimmedValue);
        }

    }

    return (
        <SK_Context.Provider
            value={{
                noteTextareaValue,setNoteTextareaValue,
                survivalAns,setSurvivalAns,
                handleInput_SK,
            }}
        >
            {children}
        </SK_Context.Provider>
    );
};

export { SK_Context, SK_Provider };