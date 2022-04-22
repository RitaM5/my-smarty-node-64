const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('hello from my smarty smarty pant!!')
});




app.get('/users', (req, res)=>{
    res.send({id: 1, name: 'abdul halim', job:'khay sudhu halim'});
});






app.listen(port, () => {
    console.log('listening to port', port);
})