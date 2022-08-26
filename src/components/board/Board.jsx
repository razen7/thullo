import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

const theme = createTheme();

export default function Board() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
            </Container>
        </ThemeProvider>
    )
}
