import express from 'express'
import {APP_PORT} from './config/app.config.js'
import routes from './route/companies.route.js'
import {join} from 'path'

const app = express()

app.use(express.urlencoded())
app.use('/api', routes)

app.use("public", express.static(join(process.cwd(), "src", "public")));

app.set('view engine', 'ejs')
app.set('views', join(process.cwd(), 'src', 'view'))

app.listen(APP_PORT, console.log('listening ...'))