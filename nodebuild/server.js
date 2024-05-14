const express = require('express');
const app = express();

app.get('/hi', (req, res) => {
    res.send('Hello World from NodeApp! docker is cool! update');
    }
);

app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);