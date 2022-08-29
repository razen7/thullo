import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ListTitle from '../ListTitle';
import TaskCard from "../TaskCard";

export default function ToDo({ tasks, showDetails }) {
    const filter = tasks.filter(el => el.status === "Completed");
    
    return (
        <>
            <Paper elevation={3}>
                <ListTitle title="Completed" color="#cffccf" />
                <Stack spacing={2}>
                    {filter.length === 0 && <Typography variant="button" align="center" sx={{ m: "10px" }}>No Completed tasks yet</Typography>}
                    {filter.length > 0 && filter.map((el) => el.status === "Completed" && (
                        <TaskCard
                            title={el.title}
                            description={el.description}
                            image={el.image}
                            id={el._id}
                            showDetails={showDetails}
                        />
                    ))}
                </Stack>
            </Paper>
        </>
    );
}
