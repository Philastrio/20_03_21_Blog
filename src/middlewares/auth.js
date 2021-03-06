import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Token is not valid" });
  }
};

export default auth;
