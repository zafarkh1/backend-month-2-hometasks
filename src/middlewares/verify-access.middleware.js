import { readFileCustom } from "../helpers/readFile.helper.js";
import { verify } from "../helpers/jwt.helper.js";

export const verifyAccess = (req, res, next) => {
  const url = req.url.split("/")[1];

  if (!url.startsWith("sign")) {
    if (!req.headers["authorization"]) {
      return res.status(401).send("Unauthorized");
    }
    const { id } = verify();
    const user = readFileCustom("users.json").find((el) => el.id == id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    req.userId = id;
  }
  next();
};
