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
    /*for (var i = 0; i < 100; i++) {
        console.log('try insert ' + i);
        collection.insert({a: i}, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }

            console.log('OK ' + i);
        });
    }*/
    collection.find({a: 1}).toArray(function(err, docs) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(docs);
    });

    console.log('Fin ');
    return;
}
