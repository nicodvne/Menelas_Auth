import express from 'express'
const router = express.Router()

import {welcomeAction} from '../controllers/mainController.js'

router.get('/', (_, res) => welcomeAction(_, res));

export default router