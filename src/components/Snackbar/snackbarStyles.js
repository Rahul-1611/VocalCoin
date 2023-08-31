import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));