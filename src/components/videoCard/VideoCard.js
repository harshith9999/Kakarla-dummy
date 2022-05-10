import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import "./videoCard.css"
import axios from 'axios';

const VideoCard = ({ lecture }) => {

  const downloadHandler = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/video/download/${lecture._id}`,
    { responseType: 'blob'})
    const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'lecture.pdf');
            document.body.appendChild(link);
            link.click();
  }

  return (
    <Card >
      <CardMedia
        component="iframe"
        height="180"
        image={lecture.url}
        alt="video"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          {lecture.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {lecture.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" sx={{ color: '#fcbd2e' }} onClick={downloadHandler}>
          Download pdf
        </Button>
      </CardActions>
    </Card>
  )
}
export default VideoCard;