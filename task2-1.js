const {createConnection }=require('mysql');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"

});
con.connect(function(err){
    if(err) throw err;
    var sql="Create table employees(id VARCHAR(100),name VARCHAR(255),department VARCHAR(100),salary VARCHAR(10))";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table created");
    })
    
})