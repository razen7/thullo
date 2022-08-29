import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Details({ details, open, handleClose }) {
    // console.log(details);

    return (
        <Dialog open={open} onClose={handleClose}>
            {details && (
                <>
                    <CardMedia
                        component="img"
                        image={details.image}
                        height="250"
                    />
                    <DialogTitle>{details.title}</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1" gutterBottom>
                            {details.description}
                        </Typography>
                        <Typography variant="button">Team members</Typography>
                        <Stack direction="row" spacing={2}>
                            {details.assignedTo.length === 0 && (
                                <Typography
                                    variant="overline"
                                    color="text.secondary"
                                >
                                    No team member
                                </Typography>
                            )}
                            {details.assignedTo.length > 0 &&
                                details.assignedTo.map((el) => (
                                    <Chip variant="filled" label={el.name} />
                                ))}
                        </Stack>
                        <Typography variant="button">Labels</Typography>
                        <Stack direction="row" spacing={2}>
                            {details.labels.length === 0 && (
                                <Typography
                                    variant="overline"
                                    color="text.secondary"
                                >
                                    No label
                                </Typography>
                            )}
                            {details.labels.length > 0 &&
                                details.labels
                                    .split(" ")
                                    .map((el) => (
                                        <Chip variant="outlined" label={el} />
                                    ))}
                        </Stack>
                    </DialogContent>
                </>
            )}
        </Dialog>
    );
}
