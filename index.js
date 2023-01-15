const path = require('path')
const cors = require('cors')
const express = require('express');
const app = express()
const port = 3000

app.use(cors())
app.use((req , res, next) => {
    console.log(req.url);
    console.log();
    next()
})
app.use(express.static('2023/01/15'))
const startApp = () => {
    app.listen(port, () => {
        console.log('Server started on port: '+ port);
    })
}

startApp()