import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardHeader, CardContent, Typography, Divider } from '@mui/material';
import useStyles from './mainStyles.js';
import InfoCard from '../InfoCard.jsx';
import Form from './form/Form.jsx';
import List from './list/List.jsx';
import { ExpenseTrackerContext } from '../../context/context.jsx';
import { useContext } from 'react';
const Main = () => {
    const { classes } = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance ${balance}
                </Typography>
                <Typography variant='subtitle1' sx={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item='true' xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main