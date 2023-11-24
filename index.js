const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;


// middleware

app.use(cors());
app.use(express.json());


app.use('/', (req, res) => {
    res.send("Ema john shopping");
})

app.listen(port, () => {
    console.log(`Ema jon server is running on port: ${port}`);
});