const express = require('express');
// create instance of express app
const app = express();

// BARENT
app.get('/querystring', (req, res)=>{
    let printOut = ''
    for (let key in req.query) { // for in loop
        printOut += `${key}: ${req.query[key]} <br />`
    }
    res.send(`Here's what they sent: ${printOut}`)
})

// home route
app.get('/', (req, res)=>{
    res.send('youve reached the home route');
});

// about route
app.get('/about', (req, res)=>{
    res.send('this is a practice app to learn about express routes')
});

// [GET] 
// designate url param with colon
app.get('/:input', (req, res)=>{
    console.log(req.params); // or req.params.input for input only
});

app.get('/greet/:name', (req, res)=>{ 
    res.send(`hello ${req.params.name}!`)
});

app.get('/greet/:first/:last', (req, res)=>{
    res.send(`Hello ${req.params.first} ${req.params.last}`)
});

app.get('/multiply/:x/:y', (req, res)=>{
    res.send(`The answer is ${req.params.x*req.params.y}`) // do javascript in ${}
});

app.get('/add/:x/:y', (req, res)=>{
    // must use parseInt because url params are a string
    res.send(`The answer is ${parseInt(req.params.x)+parseInt(req.params.y)}`)
});

// star is wildcard
app.get('/add/*', (req, res)=>{
    let myParams = req.params[0].split('/');
    let result = myParams.reduce((total, num)=>{
        return total + parseInt(num);
    }, 0)
    res.send(`The result is ${result}`); // must convert back into string 
});


app.listen(8000, ()=>{console.log('listnin')});
