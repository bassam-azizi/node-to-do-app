const http = require('http')

const server = http.Server()

server.on('request', (request, response) => {
    response.write('Hello world')
    response.end()
})

server.listen(1730)