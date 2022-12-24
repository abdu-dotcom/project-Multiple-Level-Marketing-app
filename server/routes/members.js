import express from "express";
import { createMember, getMembers } from "../controller/members.js";

const router = express.Router();

router.post("/api/create-member", createMember);
router.get("/api/members", getMembers);

export default router;