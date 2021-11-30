import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './Myproject.css'

const MyProject = ({project}) => {
   const {id, url, name, description} = project;
   const history = useHistory();

   const handleDetails = () => {
       history.push(`/projectDetails/${id}`);
   }

    return (
        <Grid  item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{ height: '100%'}}>
      <CardMedia
        component="img"
        margin="10"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    <Grid  className="buy-btn">
    <Button><a className="button" href={url} target="blank">Live Side</a></Button>
        <Button className="detail-btn" onClick={handleDetails}>Details</Button>
        </Grid>
    </Card>
    </Grid>
    );
};

export default MyProject;