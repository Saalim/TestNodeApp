// Reference HANA driver in the Node app and update the connection details var hdb = require(‘hdb’);
// Modify the host IP and password based on your system information var client = hdb.createClient({ host : ‘’, port : 39013, user : ‘SYSTEM’, password : ‘’ });
// select from a sample table var sql = “select * from m_database”;
// Execute the query and output the results // Note: this code doesn’t handle any errors (e.g. connection failures etc.,)

console.log ("Hello Node World!");
var hdb = require("hdb");
var client = hdb.createClient({ host : "172.21.201.45", port : 30041, user : "gsaxena", password : "Welcome3"});
var sql = 'select * from m_database';
client.connect(function (err)
 {
    if (err)
    {
        return console.error('Connect error', err);
    }
    console.log("Connected");
         client.exec (sql, function (err, rows)
     {
         console.log('Results:', rows);
         client.end();
     });
 });
