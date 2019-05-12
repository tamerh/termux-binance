var exec = require('child_process').exec;

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(process.env.HOME + 'binance.json', 'utf8'));

const binance = require('node-binance-api')().options({
  'APIKEY': obj.key,
  'APISECRET': obj.sec
});

binance.balance((error, balances) => {
  if (error) return console.error(error);
  console.log("balances()", balances);
});

function execution_update(data) {

  dir = exec("termux-notification --title BinanceUpdate --content BinanceUpdate", function (err, stdout, stderr) {

  });

}

binance.websockets.userData(execution_update);