import express from 'express'
const app = express();
import { Configuration, OpenAIApi } from "openai";

const PORT = 3002;

const configuration = new Configuration({
    organization: "org-j84p1Mdi8vtIhl2cORfKeM3G",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
});


app.post('https://api.openai.com/v1/completions', {
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
        configuration,
    },
    body: {
        response
    }
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})

