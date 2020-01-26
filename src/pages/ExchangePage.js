import React from 'react';
import Header from '../components/header/Header';
import ExchangePocket from '../containers/ExchangePocket';
import ExchangeRates from '../containers/ExchangeRates';
import ExchangeButton from '../containers/ExchangeButton';

const ExchangePage = () => {
  return (
    <>
      <Header />
      <ExchangePocket type="source" />
      <ExchangeRates />
      <ExchangePocket type="destination" />
      <ExchangeButton />
    </>
  );
};
export default ExchangePage;