import express from "express";
import { join } from "path";
import { APP_PORT } from "./config/app-config.js";
import routes from "./routes/route.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src", "views"));

app.use("/public", express.static(join(process.cwd(), "src", "public")));
app.use("/uploads", express.static(join(process.cwd(), "src", "uploads")));

app.use(express.urlencoded());
app.use("/api", routes);

app.listen(APP_PORT, console.log("listening ..."));
