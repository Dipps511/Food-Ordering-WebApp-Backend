const express = require('express')
const app = express()

app.get('/api', (req, res) =>{
    res.json(
        {
            mesg:'Food Ordering - Backend'
        })
})

app.listen(3000)