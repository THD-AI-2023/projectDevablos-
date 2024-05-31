import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const fetchAIResponse = async (userText, chatHistory) => {
  const messages = [
    { role: "system", content: "You are Devabot ✨, a funny informative assistant. \n- Output only in txt paragraphs.\n- Provide clean production ready outputs." },
    ...chatHistory.slice(-20).map(msg => ({ role: msg.isBot ? "assistant" : "user", content: msg.text })),
    { role: "user", content: userText }
  ];

  const response = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo-0125"
  });

  return response.choices[0].message.content;
};

export { fetchAIResponse };
