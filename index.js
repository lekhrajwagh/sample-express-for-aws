const express = require('express');

const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.json());
const route = express.Router();
app.use(route);

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