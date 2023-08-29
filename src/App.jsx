import Details from "./components/sections/Details";
import Grid from '@mui/material/Unstable_Grid2';
import Main from "./components/main/Main";
import useStyles from './appStyles';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

function App() {
    const { classes } = useStyles();
    return (
        <div>
            <Grid container className={classes.grid} spacing={2} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
                <Grid item={true} xs={12} sm={4} className={classes.flex}>
                    <Details title="Income" />
                </Grid>
                <Grid item={true} xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item={true} xs={12} sm={4} className={classes.flex}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />

            </PushToTalkButtonContainer>
        </div>
    )
}

export default App;
