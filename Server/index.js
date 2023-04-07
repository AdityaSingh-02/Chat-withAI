const express = require('express')
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3002;
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}));
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
app.use(jsonParser)


const fetchData = async () => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const chatHistory=[];
}

let pr;
let api;
app.post('/question',(req,res)=>{
    res.send(req.body.query)
    pr = req.body.query
})

app.get('/question',(req,res)=>{
    res.json(pr)
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/getApi',(req,res)=>{
    res.send(req.body.api)
    api = req.body.api
    console.log(api)
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
});
