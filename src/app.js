import express from 'express'

const app = express()
const PORT = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.status(200).json("Hello, World!")
})

app.get('/about', (req, res) => {
    res.status(200).json("Это простое приложение на Express.js")
})

app.all('*', (req, res) => {
    res.status(404).json("Страница не найдена")
})
app.listen(PORT, () => {
    console.log(`The server started on http://localhost:${PORT}/.`)
})