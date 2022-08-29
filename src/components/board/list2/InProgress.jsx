import { Paper } from '@mui/material'
import React from 'react'
import ListTitle from '../ListTitle'

export default function ToDo() {
    return (
        <>
            <Paper elevation={1} >
                <ListTitle title="In Progress" color="#cfe8fc" />
                {/* 
                {card}
                <Inputplace onAddoredit={this.onAddoredit} /> */}
            </Paper>
        </>
    )
}
