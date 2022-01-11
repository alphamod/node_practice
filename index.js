const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.urlencoded( { extended: true })); // parse application/x-www-form-urlencoded body

const Authenticate = (req, res, next)=>{

    next() // req tranfers to next callback.
}


//api routes
app.get('/',(req, res)=>{
    console.log(req.body);
    res.status(200).json({message:"get success"});
});

app.post('/', (req, res)=>{
    console.log(req);
    res.status(200).json({message:"post success"});
});

app.post('/login', (req, res)=>{
    console.log({body:req.body})
    const {email, password} = req.body;  // ====> const email = req.body.email; const password = req.body.password;
    console.log({email, password});
    if(email === 'hrone@gmail.com' && password === '123456'){
        res.status(200).json({message:"login success"}); // status 200 - 299 ====> success ; status 400 - 499 ====> error
    } else{
        res.status(401).json({message:"login failed. Email or password is incorrect"}); // status 401 ====> unauthorized
    }
});




app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
});