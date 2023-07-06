import {Router} from 'express'
import {companiesGetController, companiesPostController} from '../controllers/companies.controller.js'

const router = Router()

export default router
 .get('/companies', companiesGetController)
 .post('/companies', companiesPostController)