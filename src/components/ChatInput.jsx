import React, { useState } from 'react';
import socket from '../socket';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';

const ChatInput = () => {
    const [name, setName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);

    const handleSetName = () => {
        if (name) {
            setIsNameSet(true); // Confirm name input
        }
    };
    return (
        <div>
            {
                !isNameSet ?
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className="fw-bolder text-success" style={{ fontFamily: "monospace" }}>Let's Chat</h1>
                        <img style={{width:"80%"}} src="https://i.pinimg.com/originals/16/77/7a/16777a8077a451babb2b902efc1d8725.gif" alt="" />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name..."
                        />
                        <button className='mt-3 px-3 fw-bolder btn btn-success' onClick={handleSetName}>Login</button>
                    </div>
                    :
                    <div className='w-100' >
                        <ChatHeader name={name} />
                        <ChatMessages name={name} />
                    </div>
            }
        </div>
    );
};

export default ChatInput;