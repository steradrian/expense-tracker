import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { incomeCategories, expenseCategories, resetCategories } from './utils/categories';
import { useAuthState } from 'react-firebase-hooks/auth';

    
const useTransactions = (title) => {
    const [user] = useAuthState(auth);
    const [transactions, setTransactions] = useState();

    useEffect(() => {
        db.collection('users')
            .doc(user.displayName)
            .collection('transactions')
            .orderBy('date', 'asc')
            .onSnapshot(snapshot => {
                setTransactions(snapshot.docs.map((doc) => doc.data()))
            });
        
    }, []);
    
    resetCategories();
    
    const transactionsPerType = transactions?.filter((t) => t.type === title);

    const total = transactionsPerType?.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    transactionsPerType?.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if (category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);


    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    };

    const balance = transactions?.reduce((acc, currVal) => {
        return (currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

   // console.log(balance);
    return { total, chartData, balance }

}

export default useTransactions;
