import { Router } from "express";
import {
  healthCheck,
  healthCheckInstagram,
} from "../controllers/healthcheck.controllers.js";

const router = Router();

// router.route("/").get((req, res) => {
//   healthCheck(req, res);
// });
router.route("/").get(healthCheck);
router.route("/instagram").get(healthCheckInstagram);

export default router;
