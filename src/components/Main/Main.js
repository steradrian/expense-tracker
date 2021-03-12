import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider, Button } from '@material-ui/core';
import useStyles from './MainStyles';
import Form from './Form/Form';
import List from './List/List';
import { auth, db } from '../../firebase';
import './Main.css';
import useTransactions from '../../useTransactions';
import { useAuthState } from 'react-firebase-hooks/auth';

function Main() {
    const [user] = useAuthState(auth)
    const classes = useStyles();
    const [transactions, setTransactions] = useState();
    const { balance } = useTransactions();


    useEffect(() => {
        db.collection('users')
            .doc(user.displayName)
            .collection('transactions')
            .orderBy('date', 'asc')
            .onSnapshot(snapshot => {
                setTransactions(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
            });
        
    }, []);

    return (
        <Card className={classes.root}>
            <Grid spacing={2} container alignItems="center" justify="space-between" className={classes.mainHeader}>
                <CardHeader title="Expense Tracker" subheader={`Welcome ${user.displayName} `} style={{ color: 'orange' }}/>
                <Button className={classes.button} variant="outlined" onClick={() => auth.signOut()}>Log out</Button>
            </Grid>
            
            <CardContent>
                <Typography align="center" variant="h5">Total Balance <strong>${balance}</strong></Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                {/*<InfoCard />*/}
                </Typography>
                <Divider className={classes.divider} />
                <Form style={{ marginBottom: '20px' }}/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}  style={{maxHeight: '180px', overflow: 'auto'}}>
                        {
                            transactions?.map(({ id, data }) => (
                                <List key={id} data={data} id={id} />
                            ))}
              </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
