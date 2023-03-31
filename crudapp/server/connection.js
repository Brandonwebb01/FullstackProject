//npm install mysql --save
const mysql = require("mysql"); 

const conn = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306, //port: 3306
    user: "root", 
    password: "", //password: ""
    database: "fullstackdatabase"
});

conn.connect();
module.exports = conn;