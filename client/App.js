
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const res = await axios.post("http://localhost:5000/chat", { message: input });
    setMessages([...messages, { role: "user", text: input }, { role: "bot", text: res.data.reply }]);
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
