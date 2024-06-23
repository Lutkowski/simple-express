import {Router} from "express"

const router = new Router()

router.get('/', (req, res) => {
    res.status(200).send("Hello, World!")
})

router.get('/about', (req, res) => {
    res.status(200).send("Это простое приложение на Express.js")
})

router.all('*', (req, res) => {
    res.status(404).send("Страница не найдена")
})

export default router