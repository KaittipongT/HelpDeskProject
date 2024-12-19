import React from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    TextField,
    MenuItem,
} from "@mui/material";

const TicketList = ({ tickets, fetchTickets }) => {
    const handleStatusUpdate = async (id, status) => {
        await axios.put(`http://localhost:3000/api/tickets/${id}`, { status });
        fetchTickets();
    };

    return (
        <Grid container spacing={2}>
            {tickets.map((ticket) => (
                <Grid item xs={12} md={6} lg={4} key={ticket.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{ticket.title}</Typography>
                            <Typography>{ticket.description}</Typography>
                            <Typography>Status: {ticket.status}</Typography>
                            <TextField
                                select
                                fullWidth
                                value={ticket.status}
                                onChange={(e) =>
                                    handleStatusUpdate(ticket.id, e.target.value)
                                }
                                sx={{ mt: 2 }}
                            >
                                <MenuItem value="pending">Pending</MenuItem>
                                <MenuItem value="accepted">Accepted</MenuItem>
                                <MenuItem value="resolved">Resolved</MenuItem>
                                <MenuItem value="rejected">Rejected</MenuItem>
                            </TextField>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TicketList;
