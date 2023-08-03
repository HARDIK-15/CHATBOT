import React from 'react';
import ChatBot from 'react-simple-chatbot';
import begin from '../bot';


const Chatbot = () => {
    return (
        <>
            <ChatBot steps={begin} />
        </>
    )
}

export default Chatbot;
