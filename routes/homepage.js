import Router from "express";
import express from "express";
import APIcontroller from "../controller/APIcontroller.js";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get("/", (req, res) => {
  // #swagger.tags = ['/']
  // #swagger.description = "to get homepage page"
  /* #swagger.responses[200] = {
            description: 'page opened',
    } */
  res.sendFile(path.join(__dirname + "../../views/homepage.html"));
});
router.post("/", APIcontroller.login, (req, res) => {
  // #swagger.tags = ['/']
  // #swagger.description = "to login"
  /* #swagger.parameters['obj'] = {
          in: 'body',
              description: 'login',
                schema: {
                    "email": "string",
                    "password": "string",
                }
        } */
  /* #swagger.responses[200] = {
            description: 'login successfully',
            schema: {
                "code": "200",
                "message": "Login successfully",
                "data": "Login successfully",
            }
    } */
  /* #swagger.responses[400] = {
            description: 'user not found',
            schema: {
                "code": "400",
                "message": "user not found",
            }
    } */
});
export default router;
