import React from "react";
import './chat.css';
import ChatFeed from './ChatFeed';
import { ChatEngine } from 'react-chat-engine';

const projectID = '20cc05b8-9658-407a-a676-491e100d024a';

const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderNewChatForm={(creds) => {}}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default Chat;
