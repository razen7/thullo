import { Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ListTitle from '../ListTitle'
import TaskCard from '../TaskCard';

export default function InProgress() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('https://thullo-backend.herokuapp.com/tasks')
            .then(response => response.json())
            .then(data => setTasks(data.filter(obj => obj.status === 'In Progress')));
    }, []);
    return (
        <>
            <Paper elevation={1} >
                <ListTitle title="In Progress" />
                {
                    tasks.map((t, idx) => <TaskCard key={idx} details={t} />)
                }
            </Paper>
        </>
    )
}
