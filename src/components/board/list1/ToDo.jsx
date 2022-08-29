import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ListTitle from "../ListTitle";
import TaskCard from "../TaskCard";

export default function ToDo({ tasks, showDetails }) {
    const filter = tasks.filter(el => el.status === "To Do");
    
    return (
        <>
            <Paper elevation={3}>
                <ListTitle title="To Do" color="#fce3cf" />
                <Stack spacing={2}>
                    {filter.length === 0 && <Typography variant="button" align="center" sx={{ m: "10px" }}>No To Do tasks yet</Typography>}
                    {filter.length > 0 && filter.map((el) => (
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
