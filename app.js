const express = require('express');
const app = express();

const server = app.listen(8080, () => console.log('Server Up'));

app.set('views', './views');
app.set('view engine', 'ejs');

let fakeData = [
    { fname: "Matias", lname: "Sánchez", age: 21 },
    { fname: "Adrian", lname: "Abadin" },
    { fname: "Lautaro", lname: "Vazquez", age: 32 }
]

app.get('/', (req, res) => {
    res.render('home', {
        alumnos: fakeData
    })
})