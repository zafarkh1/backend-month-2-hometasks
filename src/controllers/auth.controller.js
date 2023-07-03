import { readFileCustom } from "../helpers/readFile.helper.js";
import { writeFileCustom } from "../helpers/writeFile.helper.js";
import { sign, verify } from "../helpers/jwt.helper.js";

export const signIn = (req, res) => {
  const { username, password } = req.body;

  const user = readFileCustom("users.json").find(
    (el) => el.password == password && el.username == username
  );

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json({
    message: "Successfully signed in",
    accessToken: sign({ id: user.id }),
  });
};

export const signOut = (req, res) => {
  const accessToken = req.headers["authorization"];

  const { id } = verify(accessToken);

  const user = readFileCustom("users.json").find((el) => el.id == id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  console.log(user.accessToken);
  if (user.accessToken) {
    delete user.accessToken;

    const allUsers = readFileCustom("users.json");
    const userIndex = allUsers.findIndex((el) => el.id == id);
    allUsers.splice(userIndex, 1);
    allUsers.push(user);

    writeFileCustom("users.json");
  }
  return res.send("Successfully signed out");
};