import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg'; // Custom logo file

// ✅ Load API URL from environment variable
const apiUrl = process.env.REACT_APP_API_URL;

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
      const res = await axios.post(`${apiUrl}/chat`, { message: userInput });

      const reply = res.data?.reply || "🤖 No response from server.";
      setMessages(prev => [...prev, { role: "bot", text: reply }]);
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
    <div className="App">
      <div className="chat-container">
        <img src={logo} alt="AI Logo" className="app-logo" />
        <h2>🤖 AI ChatBot</h2>

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.role}>
              {msg.text}
            </div>
          ))}
          {isLoading && <div className="bot">Typing...</div>}
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
        />
      </div>
    </div>
  );
}

export default App;
