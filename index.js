require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateContent() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Top 10 programing language?";
        const result = await model.generateContent(prompt);
        
        console.log(result.response.text());
    } catch (error) {
        console.error('Error:', error);
    }
}

generateContent();
