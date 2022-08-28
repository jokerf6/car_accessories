import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger_output.json" assert { type: "json" };
import Router from "express";
import homepage from "./homepage.js";
const router = Router();
router.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.use("/", homepage);
export default router;
