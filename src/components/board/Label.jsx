import { Chip } from '@mui/material'
import React from 'react'

export default function Label({ label }) {
    return (
        <Chip label={label} color="primary" variant="outlined" />
    )
}
