import {
    Avatar,
    AvatarGroup,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function TaskCard({
    title,
    description,
    labels,
    owner,
    image,
    assignedTo,
    dueDate,
    showDetails,
    id,
    idx,
    user, 
}) {
    return (
        <Draggable draggableId={id} index={idx} key={id} isDragDisabled={user.id !== owner._id && !assignedTo?.some(el => el._id === user.id)}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card
                        key={id}
                        sx={{ minHeight: 70 }}
                        onClick={() => showDetails(id)}
                    >
                        <CardMedia
                            component="img"
                            image={image}
                            alt=""
                            height={150}
                        />
                        <CardContent>
                            <Typography variant="h5">{title}</Typography>
                            <Typography variant="p">{description}</Typography>
                            {labels &&
                                labels.map((label) => (
                                    <Chip
                                        color="primary"
                                        variant="filled"
                                        label={label}
                                    />
                                ))}

                            <AvatarGroup max={4}>
                                <Avatar
                                    sx={{
                                        bgcolor: "deepOrange[500]",
                                        width: 24,
                                        height: 24,
                                    }}
                                >
                                    {owner.name.slice(0, 1)}
                                </Avatar>
                            </AvatarGroup>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    );
}
