import express from 'express'
const router = express.Router()
import passport from '../auth/auth.js';

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import {welcomeAction} from '../controllers/mainController.js'

import jwt from 'jsonwebtoken'

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


router.post('/login', (req, res, next) => {
  passport.authenticate('login', async (err, user) => {
    try {
      if (err || !user) {
        const error = new Error('Une erreur est survenue.')

        return res.status(404).json({'message': 'utilisateur introuvable'})
      }

      req.login(user, {session: false}, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email}
        const token = jwt.sign({ user : body }, 'thisIsZyzzBro');

        res.json({token});
      })

    } catch (error) {
      return next(error);
    }
  })(req, res, next)
});


router.get(
  '/login_check',
  passport.authenticate('jwt', {session: false}),
  (_, res) => {
    return res.status(200);
  }
)


export default router