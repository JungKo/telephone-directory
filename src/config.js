const config = {
	host: 'http://127.0.0.1',
	port: 8000,
	path:'directories',
}

config.api =`${config.host}:${config.port}/${config.path}`


module.exports = config