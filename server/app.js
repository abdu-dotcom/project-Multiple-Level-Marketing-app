import express from "express";
import mongoose from "mongoose";
import routerMember from "./routes/members.js";

// variable 
const username = 'abduh-batubara';
const password = 'batubara';
const cluster = 'cluster0.21zordw.mongodb.net';
const database = 'multiple_level_marketing';
let db;
const app = express();
const port = 5000;


mongoose.set('strictQuery', true);
// connect to database mongoodb
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

app.use(express.json());
app.use(routerMember);

export { app, port, db };