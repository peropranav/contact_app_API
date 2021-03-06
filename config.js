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
        'port' : '4040',
        'domain':''
        }
}

module.exports = config[config.env];