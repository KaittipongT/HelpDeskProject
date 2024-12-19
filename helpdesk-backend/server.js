const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let tickets = [];
let currentId = 1;

app.post("/api/tickets", (req, res) => {
    const { title, description, contactInfo } = req.body;
    const newTicket = {
        id: currentId++,
        title,
        description,
        contactInfo,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
