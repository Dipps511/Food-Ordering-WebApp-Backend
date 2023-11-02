const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.json(
        {
            mesg:'Food Ordering - Backend check again deploy on Thursday'
        })
})

app.listen(3000)