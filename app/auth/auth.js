import passport from 'passport';
import { Strategy } from 'passport-local';

import UserModel from '../models/userModel.js';

passport.use(
    'register',
     new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                // appelle une méthode integrée dans mongoose.
                const user = await UserModel.create({email, password});

                // done(null) veut dire qu'il y a pas eu d'erreur
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
)

export default passport