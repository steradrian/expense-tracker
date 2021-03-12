import React from 'react';
import Charts from './Charts/Charts';
import { Grid } from '@material-ui/core';
import './Tracker.css';
import useStyles from './TrackerStyles';
import Main from './Main/Main';

function Tracker() {
    const classes = useStyles();
    return (
        <div className="tracker">
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4}>
                    <Charts title="Income" />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Charts title="Expense"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Tracker;
