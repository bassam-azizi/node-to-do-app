const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('default-src', 'none')

app.use(express.static('views'))

// res.header('Content-Security-Policy', 'img-src' 'self');

app.all('/', function (req, resp) {
    // resp.header('Content-Security-Policy', 'img-src' = 'self');
    resp.render('index', {
        tasks: ['Create a Web application', 'commit to github', '']
    })
})


app.listen(1331)