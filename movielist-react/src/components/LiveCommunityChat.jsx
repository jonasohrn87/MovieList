import React, { useEffect, useState } from "react";
import "../App.css";

const LiveCommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async () => {
    const response = await fetch(
      "http://localhost:1337/api/live-community-chats?sort=createdAt:desc"
    );
    const data = await response.json();
    if (data.data) {
      const sortedMessages = data.data.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      setMessages(sortedMessages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const response = await fetch(
      "http://localhost:1337/api/live-community-chats",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            chat: newMessage,
          },
        }),
      }
    );

    if (response.ok) {
      setNewMessage("");
      fetchMessages();
    }
  };

  useEffect(() => {
    fetchMessages();
    const fetchMessagesInterval = setInterval(fetchMessages, 10000);
    return () => clearInterval(fetchMessagesInterval);
  }, []);

  const messageTime = (e) => {
    const date = new Date(e);
    return date.toLocaleTimeString("sv-SE", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="liveCommunityChat-container">
      <div className="chat-messages-container">
        {messages.map((message) => (
          <div key={message.id} className="chat-messages-box">
            <div className="chat-messages-time-user">
              <span className="chat-messages-time">{messageTime(message.createdAt)}</span>
              <span className="chat-messages-user">{message.documentId}</span> {/*document-id - ändra till user senare?*/}
            </div>
            <div className="chat-messages-text">
              <p>{message.chat}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Skriv ett meddelande..."
          className="chat-input-field"
        />
        <button type="submit" className="chat-submit-btn">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default LiveCommunityChat;
