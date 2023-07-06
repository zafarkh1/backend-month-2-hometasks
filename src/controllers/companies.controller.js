import { readFileCustom } from "../helpers/read.helper.js";
import { writeFileCustom } from "../helpers/write.helper.js";

export const companiesGetController = (_, res) => {
  const allCompanies = readFileCustom("companies.json");

  res.render("companies", { companies: allCompanies });
};

export const companiesPostController = (req, res) => {
  const allCompanies = readFileCustom("companies.json");

  const { title } = req.body;

  allCompanies.push({
    id: allCompanies.at(-1)?.id + 1 || 1,
    title,
  });

  writeFileCustom("companies.json", allCompanies);

  res.redirect("/api/companies");
};