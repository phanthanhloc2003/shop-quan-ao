import React from "react";
import { Paper } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./compoment/Profile";
import Order from "./compoment/Order";

function RightPanel() {
    return (
        <Paper style={{
            padding: "0 15px", border: "none",
            background: "transparent",
            boxShadow: "none",
        }}>
            <Routes>
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Order" element={<Order />} />
            </Routes>

        </Paper>
    );
}

export default RightPanel;
