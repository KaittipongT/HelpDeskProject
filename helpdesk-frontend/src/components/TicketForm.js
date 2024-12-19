import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";

const TicketForm = ({ fetchTickets }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [contactInfo, setContactInfo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/tickets", {
            title,
            description,
            contactInfo,
        });
        fetchTickets();
        setTitle("");
        setDescription("");
        setContactInfo("");
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Contact Info"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <Button variant="contained" type="submit">
                Create Ticket
            </Button>
        </Box>
    );
};

export default TicketForm;
