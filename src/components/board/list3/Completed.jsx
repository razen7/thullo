import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ListTitle from "../ListTitle";
import TaskCard from "../TaskCard";

export default function ToDo({ tasks, showDetails, user }) {
    const filter = tasks.filter((el) => el.status === "Completed");

    return (
        <>
            <Paper elevation={3}>
                <ListTitle title="Completed" color="#cffccf" />
                <Stack spacing={2}>
                    {filter.length === 0 && (
                        <Typography
                            variant="button"
                            align="center"
                            sx={{ m: "10px" }}
                        >
                            No Completed tasks yet
                        </Typography>
                    )}
                    {filter.length > 0 &&
                        filter.map(
                            (el, idx) =>
                                el.status === "Completed" && (
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
                                )
                        )}
                </Stack>
            </Paper>
        </>
    );
}
