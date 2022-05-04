import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./videoCard.css"

const VideoCard = ({title,description,url}) => {

    return (
    <Card >
      <CardMedia
        component="iframe"
        height="180"
        image={url}
        alt="video"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
    </Card>
    )
}
export default VideoCard;