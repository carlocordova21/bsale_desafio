import {Router} from 'express'
import {pool} from '../db.js'

const router = Router();

router.get('/test', (req, res) => res.send('Esto es una prueba'))

router.get('/products', async (req, res) => {
   const [products] = await pool.query("SELECT * FROM product")
   res.json(products)
})

export default router