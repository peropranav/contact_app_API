const config = {
    env: process.env.NODE_ENV,
    devMode:
        {
        'secret': 'supersecret',
        'port' : '3000',
        'domain':'http://localhost:'
        },

    prodMode:
        {
        'secret': 'supersecret',
        'port' : '80',
        'domain':''
        }
}

module.exports = config[config.env];