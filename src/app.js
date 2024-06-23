import express from 'express'

const app = express()
const PORT = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.status(200).json("Hello, World!")
})

app.listen(PORT, () => {
    console.log(`The server started on port ${PORT}.`)
})