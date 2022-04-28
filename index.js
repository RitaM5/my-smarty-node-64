const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from my smarty smarty pant!!')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '0178888888' },
]
//app.get dara data read kora hoy
app.get('/users', (req, res) => {
    //filter by search quary parameter
    if(req.query.name){
       // console.log(req.query);
       const search = req.query.name.toLowerCase();
       const matched = users.filter(user => user.name.toLowerCase().includes(search))
       res.json(matched)
    }
   else{ 
       res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    // console.log(req.params);
     /*const id = req.params.id;
    const user = users[id]; */
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user) ;
    res.json(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
});

app.listen(port, () => {
    console.log('listening to port', port);
}) 
/* const express = require('express')
const cors = require('cors')

// Initialize app
const app = express()

// Use middlewares
app.use(cors())
app.use(express.json())

app.post("/users", (req, res) => {
    console.log(req.body)
    res.json({message: "Post method success"})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
}) */
