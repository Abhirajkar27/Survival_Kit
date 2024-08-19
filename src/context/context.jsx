import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const SK_Context = createContext();

const SK_Provider = ({ children }) => {
    const [noteTextareaValue, setNoteTextareaValue] = useState('');
    const [survivalAns, setSurvivalAns] = useState('');
    const [survivalQues, setSurvivalQues] = useState('What would you carry with you if you get stranded at a');
    const [survivalPlace, setSurvivalPlace] = useState('Deserted Island');
    const [emoji, setEmoji] =
        useState(["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
            "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
            "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸",
            "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️",
            "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡",
            "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓",
            "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄",
            "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵",
            "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠",
            "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽",
            "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀",
            "😿", "😾", "🙈", "🙉", "🙊", "🐵", "🐒", "🦍", "🦧", "🐶",
            "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍",
            "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬",
            "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑",
            "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭",
            "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻",
            "🐻", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃",
            "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆",
            "🦢", "🦉", "🦤", "🦩", "🦚", "🦜", "🪽", "🐸", "🐊", "🐢"]);

    useEffect(() => {
        const fetchEmojis = async () => {
            try {
                const response = await fetch('https://media-store.vyld.io/dev/assets/emojisGrouped.json')
                const apiResponse = response;
                console.log("hey",apiResponse);
                // const extractedEmojis = apiResponse.map(item => item.emojis[0].char);
                // setEmoji(extractedEmojis);

             
            } catch (error) {
                console.error('Error fetching emojis:', error);
            }
        };

        fetchEmojis();
    }, []);

    function handleInput_SK(value) {
        if (survivalAns.length < 26) {
            // if (value.length > 26) {
            //     value = value.slice(0, 26);
            // }
            // const lineCount = value.split('\n').length;
            // if (lineCount <= 4) {
            //     const trimmedValue = value.replace(/^\s+/g, '');
            setSurvivalAns(prev => prev + value);
            // }
        }
    }

    return (
        <SK_Context.Provider
            value={{
                noteTextareaValue, setNoteTextareaValue,
                survivalAns, setSurvivalAns,
                survivalQues, setSurvivalQues,
                survivalPlace, setSurvivalPlace,
                emoji, setEmoji,
                handleInput_SK,
            }}
        >
            {children}
        </SK_Context.Provider>
    );
};

export { SK_Context, SK_Provider };