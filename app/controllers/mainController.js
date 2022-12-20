import {sayHello} from '../services/mainServices.js'

export const welcomeAction = (_, res) => {
    return res.status(200).json(sayHello())
}