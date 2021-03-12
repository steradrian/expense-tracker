import React, { useState } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './FormStyles';
import { auth, db } from '../../../firebase';
import { incomeCategories, expenseCategories } from '../../../utils/categories';
import formatDate from '../../../utils/formatDate';
import { useAuthState } from 'react-firebase-hooks/auth';

function Form() {
    const classes = useStyles();
    const [user] = useAuthState(auth);

    const initialState = {
        type: "Income",
        category: "Salary",
        amount: 0,
        date: formatDate(new Date()),
    };

    const [formData, setFormData] = useState(initialState);

    const createTransaction = (e) => {
        e.preventDefault();

        if (formData !== initialState) {
            db
                .collection('users')
                .doc(user.displayName)
                .collection('transactions')
                .add({
                    type: formData.type,
                    category: formData.category,
                    amount: Number(formData.amount),
                    date: formatDate(formData.date),
                });
            
        } else alert("Make sure all fields are completed");
        
        
        
        setFormData(initialState);
    }

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                        ...
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value}) }/>
                </Grid>

                <Grid item xs={6}>
                    <TextField type="date" label=" " fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)}) }/>
                </Grid>

                <Button className={classes.button} variant="outlined" fullWidth onClick={createTransaction}>Add transaction</Button>
            </Grid>
        </div>
    )
}

export default Form
