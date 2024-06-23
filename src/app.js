import express from 'express'
import router from "./routes.js";

const app = express()
const PORT = 3000

app.use('/static', express.static('public'))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`The server started on http://localhost:${PORT}/.`)
})