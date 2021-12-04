import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
  Navbar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import './App.css';
export default function App() {
  return (
    <div>
      <div className="app">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>{' '}
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>{' '}
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>{' '}
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: 'white', textAlign: 'center' }}
            >
              Cosmos Crypto
              <br />
              All rights reserved
            </Typography.Title>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
