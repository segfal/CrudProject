const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const {db} = require('./db');

//Use Cors to allow cross origin resource sharing
app.use(cors());
const syncDb = () => db.sync();



app.get('/student', (req, res) => {
    res.send('Hello World!')
}
)

app.get('/campus', (req, res) => {
    res.send('Hello World!')
}
)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
)

