const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World')
})
app.post('/', (req, res) => {
    res.send("post method as output")
})

app.put('/put', (res, req) => {
    res.send("Put method output display")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})