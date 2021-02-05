const http = require('http');
let app = http.createServer();
// const data = require('./src/data');
// const prototypeQuestions = data.prototypeData;
const util = require('./src/util')
const Game = require('./src/Game')
// const Round = require('./src/Round')
// const Turn = require('./src/Turn')
// const Deck = require('./src/Deck')
// const Card = require('./src/Card')


// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000');
const currentGame = new Game ()
currentGame.start()
