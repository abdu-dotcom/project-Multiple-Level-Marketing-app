import Member from "../model/members.js";

// controller create Member     
export const createMember = async(req, res) => {

    const member = new Member(req.body);
    try {
        const saveMember = await member.save();
        res.status(201).json(saveMember);
    } catch (error) {
        res.status(500).json(error.message);
    }
};