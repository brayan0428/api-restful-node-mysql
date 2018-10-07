const mysql = require('mysql');

const mysqlConnect = mysql.createConnection ({
    host : 'db4free.net',
    user : 'user_admin_bll',
    password : 'Br4y4n0428',
    database : 'sistema_cobros'
})

mysqlConnect.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Conectado correctamente');
    }
})

module.exports = mysqlConnect;