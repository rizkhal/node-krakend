const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.get('/ping', (req, res) => {
    return res.json({
        'message': 'Pong!'
    });
});

app.listen(port, () => {
    console.log(`⚡️[app]: Server is running at http://${host}:${port}`);
});


