import express from "express";
import { createMember } from "../controller/members.js";

const router = express.Router();

router.post("/api/create-member", createMember);

export default router;