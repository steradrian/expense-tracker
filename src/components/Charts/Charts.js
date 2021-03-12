import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import Doughnut from 'react-chartjs-2';
import useStyles from './chartStyles';
import useTransactions from '../../useTransactions';

function Charts({ title }) {
    const classes = useStyles();
    
    const { total, chartData } = useTransactions(title)    

    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>
            <CardHeader title={title} subheader="" />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Charts;
