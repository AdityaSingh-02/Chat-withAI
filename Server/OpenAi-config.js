import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-j84p1Mdi8vtIhl2cORfKeM3G",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const openAiRes = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });