
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const fs = require("fs");
const pdf = require("pdf-parse");
dotenv.config();


// Configuration
const api = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(api);
const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const model = genAI.getGenerativeModel({
  model: "gemini-pro",
  generationConfig,
});

async function extractTextFromPDF(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);
  
    try {
      const data = await pdf(dataBuffer);
      return data.text;
    } catch (error) {
      console.error("Error parsing PDF:", error);
      return null;
    }
  }

// Generate Content
async function generateContent(prompt) {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating content:", error);
      throw error;
    }
  }

// Test

const TestBot = async(req,res) => {

    try {
       
        const text = await extractTextFromPDF("PdfFiles/SINAV_YONETMELIGI.pdf");
        const prompt = req.body.prompt;
        const rule = `you are a text parser, i want you to summarize an answer for me from the given text. given question : ${prompt}. given text : ${text}`
        const response = await generateContent(rule);
        return res.status(200).json({response});
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

// export 
module.exports = {
    TestBot
}