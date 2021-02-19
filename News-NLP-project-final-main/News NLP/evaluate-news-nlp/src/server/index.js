

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')


const dotenv = require('dotenv');
dotenv.config( {path: '\.env'});

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


const  apiKey = process.env.API_KEY;
const fetch = require('node-fetch');
const sentiment ={ };
app.post('/api',(request,response)=> {
    let text= request.query.text;
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${text}&lang=en&model=general`)
    .then(data => data.json())
    .then(function (data) {
 sentiment['agreement'] =data.agreement;
 sentiment['confidence'] =data.confidence;
sentiment['irony'] = data.irony;
sentiment['credits']=data.status.remaining_credits;

 response.send(sentiment);
})

})



 