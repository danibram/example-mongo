var Client = require('mongodb').MongoClient,
  mongodbUri = require('mongodb-uri');

var config = {
  hosts: [
    {
      host: '192.168.99.100',
      port: 32771
    }
  ],
  database: 'ada'
};

Client.connect(mongodbUri.format(config), {'uri_decode_auth': true}, function(err, db) {
    if (err) {
        console.log(err);
        return;
    }
    continuacion(db);
});

var continuacion =  function (db){
    var collection = db.collection('articulos');
    collection.insert({a: 1}, function(err, result) {

        console.log('OK');
        db.close();
        return;
    });
}
