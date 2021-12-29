import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
import axios from 'axios';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

export default function AppWebsiteVisits() {
  const words = [];
  axios
    .get('https://dashboard-sobre-violencia-default-rtdb.firebaseio.com/Tweets_Crus.json')
    .then((response) => {
      console.log(response.data);
    });
  return (
    <Card>
      <CardHeader title="Tweets Coletados" subheader="Todos os tweets capturados até o momento" />
      {/* <Box sx={{ p: 3, pb: 1 }} dir="ltr"></Box> */}
    </Card>
  );
}
