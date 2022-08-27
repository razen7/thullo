import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ToDo from './list1/ToDo';

const theme = createTheme({
    palette: {
        background: {
            default: "#F8F9FD"
        }
    }
});

export default function Board() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 128,
                            height: 128,
                        },
                    }}
                >
                    <ToDo />
                </Box>
            </Container>
        </ThemeProvider>
    )
}
