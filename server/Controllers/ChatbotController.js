const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const fs = require("fs");
const pdf = require("pdf-parse");
const ChatBot = require("../Models/chatBot");
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

const TestBot = async (req, res) => {
  try {
    const text = await extractTextFromPDF("PdfFiles/SINAV_YONETMELIGI.pdf");
    const prompt = req.body.prompt;
    const rule = `Given the text extracted from a PDF document, I'd like to ask a question related to the text. Please answer the question based solely on the provided text data, without referencing external knowledge or information beyond what is contained in the text. question : ${prompt}. given text : ${text}`;
    const response = await generateContent(rule);
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { topic, prompt } = req.body;
    let text = "";
    if (topic == "internship") {
      text = await extractTextFromPDF("PdfFiles/STAJ.pdf");
    }
    if (topic == "exams") {
      text = await extractTextFromPDF("PdfFiles/SINAV_YONETMELIGI.pdf");
    }
    if (topic == "credit") {
      text = await extractTextFromPDF(
        "PdfFiles/CIFT_ANADAL_KREDI_TRANSFERİ.pdf"
      );
    }
    if (topic == "manners") {
      text = await extractTextFromPDF("PdfFiles/ETIK_KURUL.pdf");
    }
    if (topic == "training") {
      text = await extractTextFromPDF(
        "PdfFiles/IS_YERI_EGITIMI_VE_UYGULAMASI.pdf"
      );
    }
    if (topic == "tez") {
      text = await extractTextFromPDF("PdfFiles/TEZ_YAZIMI_VE_BASIMI.pdf");
    }
    if (topic == "marks") {
      text = await extractTextFromPDF("PdfFiles/OLCME_VE_DEGERLENDIRME.pdf");
    }
    const rule = `you are a text parser, i want you to summarize an answer for me from the given text. given question : ${prompt}. given text : ${text}`;
    const response = await generateContent(rule);
    await ChatBot.create({ question: prompt, response: response });
    return res.status(200).json({ answer: response });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// export
module.exports = {
  TestBot,
  sendMessage,
};
