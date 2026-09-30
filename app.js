const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const signup = require('./routes/signup.js')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views','app.html'));
})

app.use(signup);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`Server is running at http://localhost:${PORT}`);
    }
})
