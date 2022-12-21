import express from "express";
import mongoose from "mongoose";

// variable 
const username = 'abduh-batubara';
const password = 'batubara';
const cluster = 'cluster0.21zordw.mongodb.net';
let db;
const app = express();
const port = 3000;


mongoose.set('strictQuery', true);
// connect to database mongoodb
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

app.get('/', (req, res) => {
    res.send("Hello world");
});

export { app, port, db };