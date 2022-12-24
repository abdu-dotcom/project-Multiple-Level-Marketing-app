import Member from "../model/members.js";
import mongoose from "mongoose";
// controller create Member     
export const createMember = async(req, res) => {
    const member = new Member(objectNewMember);
    try {
        const saveMember = await member.save();
        res.status(201).json(saveMember);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getMembers = async(res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.json({ message: error.message });
    }
};