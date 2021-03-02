let mysql = require('mysql');
module.exports = {
    db(sql,arr,fn){
        let dbSql = mysql.createConnection({
            // host:'101.37.175.xx',
            host:'localhost',
            port:3306,
            user:'root',
            password:'root',
            database:'study'
        });
        dbSql.connect();
        dbSql.query(sql,arr,fn);
        dbSql.end();
    }
};