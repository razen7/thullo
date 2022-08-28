import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const goTo = useNavigate();
    const [nameErr, setNameErr] = React.useState("");
    const [emailErr, setEmailErr] = React.useState("");
    const [passwordErr, setPasswordErr] = React.useState("");
    const [cPasswordErr, setCPasswordErr] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");
        const confirm_password = data.get("confirm_password");
        if (name.length < 4) {
            setNameErr("Name must be atleast 4 characters");
            return;
        }
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr("Invalid Email");
            return;
        }
        if (password.length < 6) {
            setPasswordErr("Password must be atleast 6 characters long");
            return;
        }
        if (password !== confirm_password) {
            setCPasswordErr("Passwords do not match");
            return;
        }
        setNameErr("");
        setEmailErr("");
        setPasswordErr("");
        setCPasswordErr("");

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
                confirmPassword: confirm_password,
            }),
        };
        fetch(BASE_URL + "auth/signup", requestOptions).then(
            async (response) => {
                // let responseText = await response.text();
                let data = await response.json();
                if (response.status !== 201) {
                    alert(data.message);
                    return;
                } else {
                    alert(data.message);
                    goTo("/");
                }
            }
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    required
                                    error={nameErr.length > 0}
                                    helperText={nameErr}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={emailErr.length > 0}
                                    helperText={emailErr}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    error={passwordErr.length > 0}
                                    helperText={passwordErr}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm_password"
                                    autoComplete="new-password"
                                    error={cPasswordErr.length > 0}
                                    helperText={cPasswordErr}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
