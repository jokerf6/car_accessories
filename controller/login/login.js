import Responses from "../../util/Response.js";
import jwt from "jsonwebtoken";
async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const { User } = req.models;
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      return Responses.badRequest(res, "badRequest", "user not found");
    }
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.cookie("access_token", token, { maxAge: 24 * 60 * 60 });
    return Responses.success(res, "Login Successfully", "Login Successfully");
  } catch (err) {
    next(err);
  }
}
export default login;
