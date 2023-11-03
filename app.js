const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.json(
        {
            mesg:'Food Ordering - Backend check again deploy on Thursday in class with Satvinder'
        })
})

app.listen(5000)