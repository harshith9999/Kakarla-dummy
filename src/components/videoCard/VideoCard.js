import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./videoCard.css"

const VideoCard = () => {

    return (
    <Card className="videocardWidth">
      <CardMedia
        component="iframe"
        height="180"
        image="https://www.youtube.com/embed/tgbNymZ7vqY"
        alt="video"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Amazon System Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    )
}
export default VideoCard;