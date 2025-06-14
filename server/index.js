// index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ /chat route to handle AI message requests
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // Or use "gpt-3.5-turbo" if you're not on GPT-4 access
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err.response?.data || err.message);
    res.status(500).json({ reply: "Sorry, something went wrong with the AI." });
  }
});

// ✅ Use dynamic port on Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
