import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";

const router = Router();

// router.route("/").get((req, res) => {
//   healthCheck(req, res);
// });
router.route("/").get(healthCheck);

export default router;
