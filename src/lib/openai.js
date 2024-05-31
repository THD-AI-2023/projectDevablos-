import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const fetchAIResponse = async (userText) => {
  const response = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userText },
    ],
    model: "gpt-4o",
  });

  console.log(response);

  // if (!response.ok) {
  //   const errorDetails = await response.json();
  //   throw new Error(`API error: ${errorDetails.error.message}`);
  // }

  return response.choices[0].message.content
};

export { fetchAIResponse };
