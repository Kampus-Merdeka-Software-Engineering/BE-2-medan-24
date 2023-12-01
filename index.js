import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

app.use(UserRoute);

db.sync({alter: true}).then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
        console.log(`Booking form listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
});
