import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IDict } from '../Gallery/index';


const DictCard: React.FC<IDict> = ({ name, description, cnt }) => {
  return (
    <Card sx={{ minWidth: 120 }}>
      <CardContent>
        <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <Typography 
          sx={{ fontWeght: 'bold'}}
          variant="body2"
        >
          {cnt}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DictCard;