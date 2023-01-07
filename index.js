var ChessWebAPI = require('chess-web-api');

var chessAPI = new ChessWebAPI();

const prompt = require('prompt');

prompt.start();

prompt.get(['name'], ((err, result) => {
    getPlayer(result.name);
}));

async function getPlayer(name) {
    chessAPI.getPlayer(name)
        .then(function(response) {
        }, function(err) {
            console.error(err);
        });
}
