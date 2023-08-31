import Details from "./components/Sections/Details";
import Grid from '@mui/material/Unstable_Grid2';
import Main from "./components/main/Main";
import useStyles from './appStyles';
import { useRef, useEffect } from "react";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { useSpeechContext } from "@speechly/react-client";


function App() {
    const { classes } = useStyles();
    const { listening } = useSpeechContext();
    const main = useRef(null);
    const executeScroll = () => main.current.scrollIntoView();

    useEffect(() => {
        if (listening) {
            executeScroll();
        }
    }, [listening]);
    return (
        <div>
            <Grid container className={classes.grid} spacing={2} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
                <Grid item={true} xs={12} sm={4} className={`${classes.flex} ${classes.mobile}`}>
                    <Details title="Income" />
                </Grid>
                <Grid ref={main} item={true} xs={12} sm={3} className={classes.main} >
                    <Main />
                </Grid>
                <Grid item={true} xs={12} sm={4} className={`${classes.flex} ${classes.desktop}`}>
                    <Details title="Income" />
                </Grid>
                <Grid item={true} xs={12} sm={4} className={`${classes.flex} ${classes.last}`}>
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
