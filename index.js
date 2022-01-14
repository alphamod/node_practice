const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;
const SECRET = "kjhgvU^%$JHGF%jsefgv"

//middleware
app.use(bodyParser.urlencoded( { extended: true })); // parse application/x-www-form-urlencoded body

const Authenticate = (req, res, next)=>{  //authentication middleware
    const token = req.headers.authorization;
    if (token){
        jwt.verify(token, SECRET, (err, decoded)=>{
            if (err) throw err;
            if (decoded !== undefined){
                console.log("decoded value =", decoded);
                req.tokenPayload = decoded;
                next()
            }else{
                res.status(401).send("Unauthorized token")
            }
        })
    }else{
        res.status(401).send({message: "No token Provided"})
    }
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
    if(email === 'admin@gmail.com' && password === '123456'){
        const token = jwt.sign({data: {email, name:"john"}}, SECRET, { expiresIn: 60 })
        res.status(200).json({message:"login success", token}); // status 200 - 299 ====> success ; status 400 - 499 ====> error
    } else{
        res.status(401).json({message:"login failed. Email or password is incorrect"}); // status 401 ====> unauthorized
    }
});

app.get('/profile', Authenticate, (req, res)=>{
    console.log(req.tokenPayload);
    res.status(200).json({message:"profile success"});
} )




app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
});