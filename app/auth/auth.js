import passport from 'passport';
import { Strategy } from 'passport-local';
import JWT from 'passport-jwt';
import express from 'express'



const {Strategy : JWTStrategy, ExtractJwt} = JWT;

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
                return done(error);
            }
        }
    )
)


passport.use(
    'login',
     new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.findOne({ email });

                if (!user) {
                    return done(null, false, {'message': "Utilisateur non trouvé"});
                }

                const validate = await user.isValidPassword(password)

                if (!validate) {
                    return done(null, false, {'message': "Erreur de connexion"});
                }

                return done(null, user, {'message': "Connexion réussie"});


            } catch (error) {
                return done(error);
            }
        }
    )
)

passport.use(
    new JWTStrategy(
        {
        secretOrKey: 'thisIsZyzzBro',
        jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
)

export default passport