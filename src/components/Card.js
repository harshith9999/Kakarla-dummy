import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './components.css';

const MaterialCard = (props) => {
    return (
        <div className="cardHover">
            <Card {...props} sx={{ height: 170, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardContent>
                    <Typography variant='h5' component="div"  sx={{fontWeight: 600 ,textAlign:'center'}}>
                        {props.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
export default MaterialCard;
