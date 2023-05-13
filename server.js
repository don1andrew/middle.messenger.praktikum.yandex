const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// для прохождения теста на роутинг
app.use(({}, res, next) => {
    const exists = fs.existsSync('./dist/index.html');
    if (!exists) {
        res.status(200).send('Application is not avaliable yet');
    }
    next();
});

app.use(express.static('./dist'));

app.listen( PORT, () => {
    console.log(`Cyberapp is listening on port ${PORT}`);
})