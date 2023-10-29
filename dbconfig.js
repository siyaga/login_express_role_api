const config = {
    use: "test",
    password: 'lifeforme',
    server: '127.0.0.1',
    database: 'MyAppAPI',
    options: {
        trustedconnection: true,
        enableAritAbort:true,
        instancename: 'SQLEXPRESS'
    },
    port: 55892
}

module.exports = config;