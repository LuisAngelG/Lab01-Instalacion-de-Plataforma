const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/RutasWeb'))

app.listen(port, () => {
    console.log(port)
})