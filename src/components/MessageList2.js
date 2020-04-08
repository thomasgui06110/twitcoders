import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "../firebase/context";

const MessageList = () => {
  const { user, firebase } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);

  const handleSnapshot = snapshot => {
    const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMessages(messages);
  };

  useEffect(() => {
    const getMessages = () => {
      firebase.db
        .collection("messages")
        .orderBy("createAt", "desc")
        .onSnapshop(handleSnapshot);
    };
    return getMessages();
  }, [firebase]);
  return (
    <div>
      {messages.map(({ id, message }) => (
        <p key={id}>{message}</p>
      ))}fgdw
    </div>
  );
};

export default MessageList;
