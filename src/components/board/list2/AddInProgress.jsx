import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Stack } from "@mui/system";

export default function AddToDo({ open, user, list, handleClose }) {
    const [checked, setChecked] = useState([]);
    const [titleError, setTitleError] = useState("");
    const [descError, setDescError] = useState("");
    const [date, setDate] = useState(Date.now());

    const handleToggle = (input) => {
        const currentIndex = checked.indexOf(input);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(input);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChange = (newValue) => {
        // console.log(newValue.format());
        const newDate = newValue.format();
        setDate(newDate);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const title = data.get("title");
        const description = data.get("description");
        const labels = data.get("labels");
        const image = data.get("image");
        if (checked) data.append("assignedTo", checked);
        data.append("dueDate", date);
        data.append("owner", user.id);
        data.append("status", "In Progress");
        console.log(title, description, labels, checked, date, image);

        if (title.length < 4) {
            setTitleError("Title should be at least 4 characters long.");
        } else {
            setTitleError("");
        }

        if (description.length < 6) {
            setDescError("Description should be at least 6 characters long.");
        } else {
            setDescError("");
        }

        const requestOptions = {
            method: "POST",
            body: data,
        };

        try {
            const response = await fetch(
                "https://thullo-backend.herokuapp.com/tasks",
                requestOptions
            );
            const json = await response.json();
            alert(json.message);
            handleClose();
            window.location.reload(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Add new In Progress task</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        In Progress tasks currently undertaken by the owner -
                        and potentially other members - but are not yet done.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        fullWidth
                        required
                        margin="dense"
                        name="title"
                        id="title"
                        label="Title"
                        type="text"
                        variant="standard"
                        error={titleError.length > 0}
                        helperText={titleError}
                    />
                    <TextField
                        fullWidth
                        required
                        margin="dense"
                        name="description"
                        id="description"
                        label="Description"
                        type="text"
                        variant="standard"
                        error={descError.length > 0}
                        helperText={descError}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        name="labels"
                        id="labels"
                        label="Labels"
                        type="text"
                        variant="standard"
                        helperText="Labels should be separated by spaces (e.g. MERN Fullstack Team for three labels - MERN, Fullstack, and Team)"
                    />
                    <Typography sx={{ mt: "10px" }}>
                        Invite team members:
                    </Typography>
                    <List dense sx={{ width: "100%" }}>
                        {list.map(
                            (el) =>
                                el._id !== user.id && (
                                    <ListItem
                                        key={el._id}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                onChange={() =>
                                                    handleToggle(el._id)
                                                }
                                                checked={
                                                    checked.indexOf(el._id) !==
                                                    -1
                                                }
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemText
                                                id={el._id}
                                                primary={el.name}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                )
                        )}
                    </List>
                    <Stack spacing={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Due date"
                                inputFormat="MM/DD/YYYY"
                                value={date}
                                onChange={handleChange}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                                required
                            />
                        </LocalizationProvider>
                        <Button
                            variant="contained"
                            component="label"
                            name="image"
                        >
                            Upload Image
                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept="image/*"
                                hidden
                            />
                        </Button>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button type="submit">Add new task</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
