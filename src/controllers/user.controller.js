import {readFileCustom} from '../helpers/read-helper.js'

export const userController = (req, res) => {
	const allUsers = readFileCustom('users.json')
	res.render('index', {data: allUsers})
}