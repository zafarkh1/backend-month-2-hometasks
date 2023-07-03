import jwt from "jsonwebtoken"

export const sign = (payload) => jwt.sign(payload, "!da3$5%fw");
export const verify = (token) => jwt.verify(token, "!da3$5%fw");