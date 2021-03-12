import React from 'react';
import './App.css';
import Tracker from './components/Tracker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login/Login';
import styled from 'styled-components';
import Spinner from 'react-spinkit'
import wallet from './misc/wallet.svg';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={wallet} alt="" />
          <Spinner name="ball-spin-fade-loader" color="orange" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <Tracker/>
      )}

    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;