import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import ToDo from "./list1/ToDo";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette: {
        background: {
            default: "#F8F9FD",
        },
    },
});

export default function Board() {
    const [user, setUser] = useState(null);
    const goTo = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("thulloUser");
        if (!data) {
            goTo("/");
        } else {
            setUser(JSON.parse(data));
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
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Stack direction="row" justifyContent="center">
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                minWidth: "30%",
                                "& > :not(style)": {
                                    m: 1,
                                    width: "100%",
                                    minHeight: "90vh",
                                },
                            }}
                        >
                            <ToDo />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                minWidth: "30%",
                                "& > :not(style)": {
                                    m: 1,
                                    width: "100%",
                                    minHeight: "90vh",
                                },
                            }}
                        >
                            <ToDo />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                minWidth: "30%",
                                "& > :not(style)": {
                                    m: 1,
                                    width: "100%",
                                    minHeight: "90vh",
                                },
                            }}
                        >
                            <ToDo />
                        </Box>
                    </Stack>
                </Container>
            )}
        </ThemeProvider>
    );
}
