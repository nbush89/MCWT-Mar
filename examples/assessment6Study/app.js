const express = require('express');
const routes = require('./routes');
const app = express();

const port = 3000;
app.use(express.json());
app.use('/routes',routes);
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));