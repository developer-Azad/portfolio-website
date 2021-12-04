import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './Myproject.css'

const MyProject = ({project}) => {
   const {id, url, name, description, image} = project;
   const history = useHistory();

   const handleDetails = () => {
       history.push(`/projectDetails/${id}`);
   }

    return (
        <Grid  item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{ height: '100%', paddingTop: '30px'}}>
      <CardMedia
        component="img"
        margin="10"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        
        <Typography variant="body2">
          {description.slice(0, 150)}
        </Typography>
      </CardContent>
    <Grid >
    <div  className="buttons">
    <Button><a className=" btn" href={url} target="blank">Live Side</a></Button>
        <Button ><p className=" btn" onClick={handleDetails}>Details</p></Button>
    </div>
        </Grid>
    </Card>
    </Grid>
    );
};

export default MyProject;