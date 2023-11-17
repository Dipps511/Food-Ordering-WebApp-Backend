const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.json(
        {
            mesg:'Food Ordering - Backend check again deployment'
        })
})

app.listen(3000)