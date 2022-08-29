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

export default function AddToDo({ open, list, handleClose }) {
    const [checked, setChecked] = useState([]);

    const handleToggle = (input) => {
        const currentIndex = checked.indexOf(input);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(input);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add new To Do task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Do tasks are tasks are approved but have yet to be
                    started.
                </DialogContentText>
                <TextField
                    autoFocus
                    fullWidth
                    required
                    margin="dense"
                    name="title"
                    label="Title"
                    type="text"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    required
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    margin="dense"
                    name="labels"
                    label="Labels"
                    type="text"
                    variant="standard"
                    helperText="Labels should be separated by spaces (e.g. MERN Fullstack Team for three labels - MERN, Fullstack, and Team)"
                />
                <List dense fullWidth>
                    {list.map((user) => (
                        <ListItem
                            key={user._id}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(user._id)}
                                    checked={checked.indexOf(user._id) !== -1}
                                    disablePadding
                                />
                            }
                        >
                            <ListItemButton>
                                <ListItemText id={user._id} primary={user.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Button variant="contained" component="label" name="image">
                    Upload Image
                    <input type="file" name="image" accept="image/*" hidden />
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button>Add new task</Button>
            </DialogActions>
        </Dialog>
    );
}
