const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const port = 5000;


app.get('/', (req, res) => {
    res.send('hello from node earmaer')
})


const users = [
    { id: 0, name: 'sabana', email: 'sabana@gmail.com' },
    { id: 1, name: 'rubana', email: 'rubana@gmail.com' },
    { id: 2, name: 'haiba', email: 'haiba@gmail.com' },
    { id: 3, name: 'susmita', email: 'susmita@gmail.com' },
    { id: 4, name: 'suchorita', email: 'suchorita@gmail.com' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const display = users.filter(user => user.name.includes(search))
        res.send(display)
    }
    else {
        res.send(users)
    }
})

// post method here 

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    res.send(JSON.stringify(newUser))
    // res.json(newUser)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    user = users[id];
    res.send(user)
    console.log(req.params.id)
})

app.listen(port, (req) => {
    console.log('listhenig to port', port)
});