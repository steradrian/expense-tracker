import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './ListStyles';
import { auth, db } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function List({data, id}) {
    const classes = useStyles();
    const [user] = useAuthState(auth);

    const deleteTransaction = (e) => {
        e.preventDefault();

        db.collection('users').doc(user.displayName).collection('transactions').doc(id).delete();
    }

    return (
        <MUIList dense={false} className="list__container">
                <Slide direction="down" in mountOnEnter unmountOnExit key={id}>
                    <ListItem>

                        <ListItemAvatar>
                            <Avatar className={data.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={data.category} secondary={`$${data.amount} - ${data.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={deleteTransaction}>
                            <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    
               </Slide> 
        </MUIList>
    )
}

export default List
