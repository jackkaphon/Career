import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../images/logo_welSmall.png'

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            WELNANCE
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Welnance is a blockchain project that is developing decentralized financial services and trading of cryptocurrencies
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
