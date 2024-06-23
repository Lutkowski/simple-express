import {Router} from "express"

const router = new Router()


/**
 * @swagger
 * /:
 *   get:
 *     responses:
 *       200:
 *         description: Возвращает сообщение Привет, Мир!.
 */
router.get('/', (req, res) => {
    res.status(200).send("Hello, World!")
})

/**
 * @swagger
 * /about:
 *   get:
 *     responses:
 *       200:
 *         description: Возвращает сообщение с информацией о приложении.
 */
router.get('/about', (req, res) => {
    res.status(200).send("Это простое приложение на Express.js")
})

router.all('*', (req, res) => {
    res.status(404).send("Страница не найдена")
})

export default router