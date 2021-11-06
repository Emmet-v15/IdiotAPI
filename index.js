const express = require('express');
const app = express();
const port = "8393";

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

app.use(express.json());

app.listen(port, () => {
    console.log('listening on port ' + port);
});

app.post('/api/v1/post', (req, res) => {
    res.status(404).send();
});

app.get('/api/v1/get/discord', (req, res) => {
    res.send("https://discord.gg/QgWz9894er");
});

app.get('/api/v1/get/idiotBoard', (req, res) => {
    res.download(`${__dirname}/IdiotBoard/IdiotBoard.exe`);
    // res.status(200).send();
});