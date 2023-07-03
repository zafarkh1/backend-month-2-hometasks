import express from "express";
import { PORT } from "./config/app.config.js";
import { readFileCustom } from "./helpers/readFile.helper.js";
import { writeFileCustom } from "./helpers/writeFile.helper.js";
import { sign, verify } from "./helpers/jwt.helper.js";
import { verifyAccess } from "./middlewares/verify-access.middleware.js";
import { signIn, signOut } from "./controllers/auth.controller.js";

const app = express();

app.use(verifyAccess);
app.use(express.json());

app.post("/sign-in", signIn);
app.post("/sign-out", signOut);

app.get("", (req, res) => {
  const userId = req.userId;
  const userPosts = readFileCustom('users.json').filter((el) => el.userId == userId && delete el.userId);

	if(!userPosts) {
		res.status(401).send('Post not found')
	}

  res.send(readFileCustom("posts.json"));
});

app.post("/posts", (req, res) => {
  const url = req.url.split("/")[2];
  const userId = req.userId;
  const allPosts = readFileCustom("posts.json");

  allPosts.push({
    id: allPosts.at(-1)?.id + 1 || 1,
    ...req.body,
  });

  writeFileCustom("posts", allPosts);

  res.status(201).json({
    message: "Successfully created",
  });
});

app.listen(PORT, console.log("waiting ..."));
