import mongoose from "mongoose";

// create a schema
const Member = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    children: {
        type: Array,
        required: false
    }
}, {
    versionKey: false // you should be aware of the outcome after set to false
})

export default mongoose.model("members", Member);