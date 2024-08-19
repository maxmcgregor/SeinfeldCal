require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const habitRoutes = require('./routes/habitRoutes');

const app = express()
const port = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

//Routes
app.use('/api/habits', habitRoutes);

app.get('/', (req, res) => {
    res.send('Hello, Seinfeld!');
});
app.get('/health', (req, res) => {
    res.send('Seinfeld server is healthy!');
});

app.listen(port, () => { console.log(`Server.js started on port ${port}`) });