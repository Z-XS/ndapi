var sqlConnect = require('./sqlConnect')
var connection = sqlConnect.connection

// var createSql = "CREATE TABLE pubform1 (id int(5) not null AUTO_INCREMENT,qd int,name varchar(255) ,offer varchar(255) ,subdate timestamp not null default current_timestamp,PRIMARY KEY (id))"
var createSql = "CREATE TABLE pubform (id int(5) not null AUTO_INCREMENT,src varchar(255) ,name varchar(255) ,offer varchar(255) ,subdate timestamp not null default current_timestamp,PRIMARY KEY (id))"
connection.query(createSql,function(err,result){
    if(err){
        console.log(err.message)
    }else{
        console.log('success')
    }
})