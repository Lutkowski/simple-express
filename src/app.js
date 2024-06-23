import express from 'express'
import router from "./routes.js";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT | 3000

const app = express()

app.use('/static', express.static('public'))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`The server started on http://localhost:${PORT}/.`)
})