import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#e1b812' : '#308fe8',
  },
}));


import "./CurrentCourse.css";

export default function current_course() {
  return (
    <div class="current_course">
      <h1>Current Enrolled Course</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.shutterstock.com/image-photo/close-female-hand-holds-levitating-260nw-1782418211.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Soft skills training
            </Typography>
            <Typography variant="body3" color="text.secondary">
              <p style={{fontSize: "30px"}}>Helping students develop their communication, teamwork, leadership, problem-solving, and time management skills</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </Card>
    </div>
  );
}

