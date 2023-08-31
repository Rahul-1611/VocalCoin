import { Snackbar, AlertTitle, Alert } from "@mui/material";
import useStyles from './snackbarStyles';

export default function CustomizedSnackbar({ open, setOpen }) {
    const { classes } = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert severity="success">
                    <AlertTitle onClose={handleClose} elevation={6} variant="filled">Transaction successfully created.</AlertTitle>
                </Alert>
            </Snackbar>
        </div>
    )
}