import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import "./PastCourses.css";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function past_courses() {
  return (
    <div class="past_courses">
      <h1>Previously Enrolled Course</h1>

      <div style={{ width: '100%' }}>
        
        <Box
          sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 5,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
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
                    Core skills training
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    <p style={{ fontSize: "30px" }}>Offering guidance on technical skills related to specific industries or job roles, such as coding, graphic design, or accounting</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>

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
                    Career exploration
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    <p style={{ fontSize: "30px" }}>Helping students explore different career paths and identify their strengths and interests</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>

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
                    Job search strategies
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    <p style={{ fontSize: "30px" }}>Sharing best practices on how to search for job opportunities, how to network effectively, and how to use online resources to find job openings</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>

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
                    Resume and cover letter writing
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    <p style={{ fontSize: "30px" }}>Sharing best practices on how to search for job opportunities, how to network effectively, and how to use online resources to find job openings</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
          </Card>

        </Box>
      </div>

    </div>
  );
}