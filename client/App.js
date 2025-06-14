// App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const res = await axios.post("https://chibot.onrender.com/chat", {
        message: input
      });

      setMessages([
        ...messages,
        { role: "user", text: input },
        { role: "bot", text: res.data.reply }
      ]);
    } catch (error) {
      console.error("API call failed:", error.response?.data || error.message);
      setMessages([
        ...messages,
        { role: "user", text: input },
        { role: "bot", text: "Error: Unable to get response from server." }
      ]);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <h1>AI ChatBot</h1>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask something..."
      />
    </div>
  );
}

export default App;
