import { Button, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
import wallet from '../../misc/wallet.svg';

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    };
    
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={wallet} alt="" />
                <Typography variant="h5" style={{ color: 'orange' }}>Expense Tracker App</Typography>
                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 70px;
    text-align: center;
    background-color: rgb(255,255,255, 0.7);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.24);
    max-width: 400px !important;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: orange;
        color: white;
        width: 230px;
    }

    > button:hover {
        background-color:#ED9A00;
    }
`;