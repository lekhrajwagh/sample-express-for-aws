const express = require('express'),
    cors = require('cors'),
    path = require('path');

const app = express();

let PORT = process.env.PORT || 3000;

const route = express.Router();
app.use(route);
app.use(cors);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

route.get('/', (req, res) => {
    console.log('In root route');
    res.render('index');
})

route.get('/v1/get', (req, res) => {
    console.log('In get route and Healty');
    res.status(200).json({
        Message: 'I am healty route'
    });
})

route.get('/v1/get-secondary', (req, res) => {
    console.log('In get route and Healty');
    res.status(200).json({
        Message: 'I am secondary healty route'
    });
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT} and PID is ${process.pid}`);
})