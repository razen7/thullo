import { Avatar, AvatarGroup, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Label from './Label';

export default function TaskCard(props) {
  let { title, description, labels, owner, image, assignedTo, dueDate } = props.details;
  console.log(labels);
  return (
    <Card sx={{ minHeight: 70 }}>
      <CardMedia
        component="img"
        image="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
        alt="" />
      <CardContent>
        <Typography variant='h5'>
          {title}
        </Typography>
        <Typography variant='p'>
          {description}
        </Typography>
        {/* {labels.map(tmp => tmp.split(' ').map(label => <Label label={label} />))} */}

        <AvatarGroup max={4}>
          <Avatar
            sx={{ bgcolor: "deepOrange[500]", width: 24, height: 24 }}>
            {title[0].toUpperCase()}
          </Avatar>
        </AvatarGroup>

      </CardContent>
    </Card>
  )
}
