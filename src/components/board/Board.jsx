import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import ToDo from "./list1/ToDo";
import InProgress from "./list2/InProgress";
import Completed from "./list3/Completed";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import AddToDo from "./list1/AddToDo";

const theme = createTheme({
    palette: {
        background: {
            default: "#F8F9FD",
        },
    },
});

export default function Board() {
    const [user, setUser] = useState(null);
    const [list, setList] = useState([]);
    const [openTodo, setOpenTodo] = useState(false);
    const goTo = useNavigate();

    const openAddTodo = () => setOpenTodo(true);
    const closeAddTodo = () => setOpenTodo(false);

    const fetchList = async () => {
        console.log("fetch")
        try {
            const response = await fetch("https://thullo-backend.herokuapp.com/users");
            const data = await response.json();
            setList(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log("test")
        const data = localStorage.getItem("thulloUser");
        if (!data) {
            goTo("/");
        } else {
            setUser(JSON.parse(data));
            // fetchList();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {!user && (
                <CircularProgress
                    color="primary"
                    sx={{
                        position: "fixed",
                        left: "inherit",
                        right: "inherit",
                        top: "inherit",
                        bottom: "inherit",
                    }}
                />
            )}
            {user && (
                <Container component="main" maxWidth="lg">
                    <CssBaseline />
                    <Stack direction="row" justifyContent="center">
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                width: "33%",
                                justifyContent: "center",
                                "& > :nth-child(1)": {
                                    m: 1,
                                    width: "100%",
                                    minHeight: "90vh",
                                },
                            }}
                        >
                            <ToDo />
                            <Chip icon={<AddIcon />} label="Add new To Do task" color="warning" onClick={openAddTodo} />
                            <AddToDo open={openTodo} handleClose={closeAddTodo} list={list} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                width: "33%",
                                justifyContent: "center",
                                "& > :nth-child(1)": {
                                    m: 1,
                                    width: "100%",
                                    minHeight: "90vh",
                                },
                            }}
                        >
                            <InProgress />
                            <Chip icon={<AddIcon />} label="Add new In Progress task" color="info" />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                width: "33%",
                                justifyContent: "center",
                                "& > :nth-child(1)": {
                                    m: 1,
                                    width: "100%",
                                    minHeight: "90vh",
                                },
                            }}
                        >
                            <Completed />
                            <Chip icon={<AddIcon />} label="Add new Completed task" color="success" />
                        </Box>
                    </Stack>
                </Container>
            )}
        </ThemeProvider>
    );
}
