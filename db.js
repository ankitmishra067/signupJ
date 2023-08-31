const sql = require('mssql');

const config = {
    user: 'jmd218',
    password: 'Jman@600113',
    server: 'jmd218trainingserver.database.windows.net',
    database: 'jin_user_db',
    options: {
        encrypt: true,
    },
};

module.exports=config