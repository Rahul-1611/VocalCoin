import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardHeader, CardContent, Typography, Divider } from '@mui/material';
import useStyles from './mainStyles.js';
import Form from './form/Form.jsx';
import List from './list/List.jsx';
const Main = () => {
    const { classes } = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance $100
                </Typography>
                <Typography variant='subtitle1' sx={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* INFO CARD COMPONENT */}
                    Try saying : Add income for $100 for Category Salary for Monday...
                </Typography>
                <Divider />
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