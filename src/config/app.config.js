import {config} from 'dotenv'

config()

export const APP_PORT = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 9000