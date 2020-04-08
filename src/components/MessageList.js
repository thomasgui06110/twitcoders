import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "../firebase/context";
import Message from './Message'

const MessageList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);

  const handleSnapshot = snapshot => {
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMessages(messages);
   
  };

  useEffect(() => {
    const getMessages = () => {
      firebase.db
        .collection("messages")
        .orderBy('createdAt', 'desc')
        .onSnapshot(handleSnapshot)
    };
    return getMessages();
  }, [firebase]);

  return (
    <div>
      {messages.map(message => (
          <Message key={message.id} message={message}>
        
        </Message>
      ))}
    </div>
  );
};

export default MessageList;
