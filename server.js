const express =require('express');
const port = 3000;
const app = express();


var students = {
    1: {id: 1, name: 'John Doe'},
    2: {id: 2, name: 'Spencer Doe'},
    3: {id: 3, name: 'James Doe'},
};

app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/student', (req,res) => {
    let id = req.query.id;
    if (id) {
        res.send(Students [id-1]);
    } else {
        res.send("Hello Student")
    }
});

    app.get('/student/id/:id', (req,res) => {
    let id = req.query.id;
    if (id) {
        res.send(Students [id-1]);
    } else {
        res.send("Hello Student")
    }
});

app.post('/student', (req, res) => {
    let id = req.query.id;
    let name = req.query.name;
    student.push; {id: id; name: name};
    res.send('Student Added');
});
app.listen(port, ()=>console.log("Listening"));