import multer from "multer";
import {randomUUID} from 'crypto'

export const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'src/uploads')
	},
	filename: function(req, file, cb) {
		cb(null, randomUUID() + `.${file.mimetype.split('/')[1]}`)
	}
})