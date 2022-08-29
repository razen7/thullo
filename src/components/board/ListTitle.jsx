import { Typography } from "@mui/material";
import React from "react";

export default function ListTitle({ title, color }) {
    return (
        <Typography
            variant="h6"
            align="center"
            sx={{ bgcolor: color, padding: "1px 3px" }}
        >
            {title}
        </Typography>
    );
}
