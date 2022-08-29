import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function TaskCard({ title, description, image, id, showDetails }) {
    return (
        <Card elevation={2}>
            <CardActionArea onClick={() => showDetails(id)}>
                <CardMedia component="img" image={image} height="140" alt={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    <Typography gutterBottom variant="body1">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
