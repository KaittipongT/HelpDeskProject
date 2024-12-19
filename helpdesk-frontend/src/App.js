import React, { useState, useEffect } from "react";
import axios from "axios";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { Container, Typography } from "@mui/material";

function App() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        const response = await axios.get("http://localhost:3000/api/tickets");
        setTickets(response.data);
    };

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Helpdesk Ticket Management
            </Typography>
            <TicketForm fetchTickets={fetchTickets} />
            <TicketList tickets={tickets} fetchTickets={fetchTickets} />
        </Container>
    );
}

export default App;
