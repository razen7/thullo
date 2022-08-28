import { Typography } from "@mui/material";
import React from "react";

export default function ListTitle({ title }) {
    return (
        <Typography
            variant="h6"
            align="center"
            sx={{ bgcolor: "#cfe8fc", padding: "1px 3px" }}
        >
            {title}
        </Typography>
    );
}
