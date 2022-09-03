import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ListTitle from "../ListTitle";
import TaskCard from "../TaskCard";

export default function ToDo({ tasks, showDetails, user }) {
    const filter = tasks.filter((el) => el.status === "In Progress");

    return (
        <>
            <Paper elevation={3}>
                <ListTitle title="In Progress" color="#cfdbfc" />
                <Stack spacing={2}>
                    {filter.length === 0 && (
                        <Typography
                            variant="button"
                            align="center"
                            sx={{ m: "10px" }}
                        >
                            No In Progress tasks yet
                        </Typography>
                    )}
                    {filter.length > 0 &&
                        filter.map((el, idx) => (
                            <TaskCard
                                idx={idx}
                                title={el.title}
                                description={el.description}
                                image={el.image}
                                id={el._id}
                                showDetails={showDetails}
                                user={user}
                                owner={el.owner}
                                assignedTo={el.assignedTo}
                            />
                        ))}
                </Stack>
            </Paper>
        </>
    );
}
