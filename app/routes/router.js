import express from 'express'
const router = express.Router()
import passport from '../auth/auth.js';

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import {welcomeAction} from '../controllers/mainController.js'

router.get('/', (_, res) => welcomeAction(_, res));

router.post(
    '/signup',
    passport.authenticate('register', {'session': false}), 
      async (req, res, next) => { 
        res.json(
          {
            message: 'Sign up ok',
            user: req.user
          }
      )}
  );

export default router