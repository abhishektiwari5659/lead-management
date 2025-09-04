import { Router } from "express";
import { body, param, validationResult } from "express-validator";
import {
  listLeads,
  createLead,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

const router = Router();

const validate = (validations) => [
  ...validations,
  (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    next();
  },
];

router.get("/", listLeads);

router.post(
  "/",
  validate([
    body("name").isString().trim().notEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("phone").isString().trim().isLength({ min: 7 }),
    body("status").optional().isIn(["New", "Contacted", "Qualified", "Lost"]),
    body("source").optional().isString(),
    body("notes").optional().isString(),
  ]),
  createLead
);

router.patch(
  "/:id",
  validate([
    param("id").isMongoId(),
    body("name").optional().isString().trim().notEmpty(),
    body("email").optional().isEmail().normalizeEmail(),
    body("phone").optional().isString().trim().isLength({ min: 7 }),
    body("status").optional().isIn(["New", "Contacted", "Qualified", "Lost"]),
    body("source").optional().isString(),
    body("notes").optional().isString(),
  ]),
  updateLead
);

router.delete("/:id", validate([param("id").isMongoId()]), deleteLead);

export default router;
