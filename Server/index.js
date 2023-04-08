const express = require('express')
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();


const PORT = 3002;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(jsonParser);


let pr;
let api;

// User sends a question and that is stored in pr
app.post('/question',(req,res)=>{
    res.send(req.body.query)
    pr = req.body.query
})

// User requests for answer and that is sent back
app.get('/answer', async(req,res)=>{
    if(api === '' || api === undefined){
        res.send("Please enter the API key")
    }else{
    const configuration = new Configuration({
        apiKey: api,
      });
      const openai = new OpenAIApi(configuration);
      
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: pr}],
      });
      console.log(completion.data.choices[0].message);
      res.send(completion.data.choices[0].message);
    }
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

// User sends the API key and that is stored in api
app.post('/getApi',(req,res)=>{
    if(req.body.api[0].apikey === '' || req.body.api[0].apikey === undefined || req.body.api[0].apikey === null){
        res.send("401");
    }else{
        res.send(req.body.api)
        api = req.body.api[0].apikey
    }
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
});
