import express from 'express'
import router from "./routes.js";
import dotenv from "dotenv"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

dotenv.config()

const PORT = process.env.PORT | 3000

const app = express()

const swaggerConfig = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'simple express app API with Swagger',
            version: '1.0.0',
            description: 'Простое приложение на express',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            },
        ],
    },
    apis: ['./src/routes.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerConfig)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/static', express.static('public'))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`The server started on http://localhost:${PORT}/.`)
})