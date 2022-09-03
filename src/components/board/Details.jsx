import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { BASE_URL } from "../../constants";

export default function Details({ details, open, handleClose, user }) {
    // console.log(details, user);

    const handleDelete = async () => {
        try {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: details._id, user }),
            };
            const response = await fetch(BASE_URL + "/tasks", requestOptions);
            const data = await response.json();
            alert(data.message);
            handleClose();
            window.location.reload(false);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
                        <Typography variant="button">Owner</Typography>
                        <Typography variant="body1">
                            {details.owner.name}
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
                        {details.owner._id === user.id && (
                            <Tooltip title={"Delete task"}>
                                <IconButton
                                    color="error"
                                    sx={{
                                        position: "absolute",
                                        bottom: "10px",
                                        right: "10px",
                                    }}
                                    onClick={handleDelete}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </DialogContent>
                </>
            )}
        </Dialog>
    );
}
