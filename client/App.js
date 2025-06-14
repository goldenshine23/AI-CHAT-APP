// App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userInput = input;
    setMessages(prev => [...prev, { role: "user", text: userInput }]);
    setInput("");
    setIsLoading(true);

    try {
      // ✅ Correct API endpoint
      const res = await axios.post("https://ai-chat-app-goil.onrender.com/chat", {
        message: userInput
      });

      setMessages(prev => [...prev, { role: "bot", text: res.data.reply }]);
    } catch (error) {
      console.error("API call failed:", error.response?.data || error.message);
      setMessages(prev => [
        ...prev,
        { role: "bot", text: "⚠️ Error: Unable to get response from server." }
      ]);
    }

    setIsLoading(false);
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
        {isLoading && <div className="bot">Typing...</div>}
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
