// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';
import tweets from './tweets';
// ----------------------------------------------------------------------
function test() {
  tweets.get('/Tweets_Crus.json').then((response) => {
    console.log(response.data);
  });
}

export default function DashboardApp() {
  test();
  return (
    <Page title="Dashboard sobre Violência contra a Mulher">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Dados Coletados</Typography>
        </Box>
      </Container>
    </Page>
  );
}
