const express = require('express')
const bodyParser = require('body-parser')

const app = express()


let tasks = ['Create a nice web service project', 'Work for a nice company', 'be consistent', '']

app.set('view engine', 'ejs')
// app.set('default-src', 'none')


app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static('views'))



app.all('/', function (req, resp) {
    // receive the new tasks and save it
    if (req.body.tasks) {
        tasks = req.body.tasks.filter(function (val) { return val; });
        tasks.push('');
    }
    resp.render('index', {
        tasks: tasks
    })
})


app.listen(1331)