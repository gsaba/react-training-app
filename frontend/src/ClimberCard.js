import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                Mario{bull}Rossi
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                climber
            </Typography>
            <Typography variant="body2">
                nato il 21{bull}09{bull}1985
            </Typography>
        </CardContent>
    </React.Fragment>
);

export default function ClimberCard({climber}) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
            <p>{climber.name}</p>
        </Box>
    );
}