import { readFileCustom } from "../helpers/read-helper.js";
import { writeFileCustom } from "../helpers/write-helper.js";

export const fileUploadController = (req, res) => {
	const { firstName, lastName } = req.body;
  const allUsers = readFileCustom("users.json");

  allUsers.push({
    id: allUsers.at(-1)?.id + 1 || 1,
		firstName, lastName,
		image: path.replace('src', '')
  });
	
	writeFileCustom('users.json', allUsers)
	console.log(req.body, req.file);
  res.redirect('/api/user')
};