import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatInput.css";
import db from './firebase';
import { useStateValue } from "./StateProvider";
import Firebase from "firebase";

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection("room").doc(channelId).collection("messages").add({
                message: input,
                timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }

        setInput("");
    };

    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <Button
                    type="submit"
                    onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </div>
    )
}

export default ChatInput;
