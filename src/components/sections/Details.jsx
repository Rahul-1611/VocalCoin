import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import { useTransactions } from '../../useTransactions';
import './styles.css';
ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
    const { total, chartData } = useTransactions(title);
    return (
        <Card className={title === 'Income' ? 'income' : 'expense'}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details