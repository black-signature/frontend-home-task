import React from 'react';
import './ExchangeRates.scss';

const ExchangeRates = (props) => {
  const { currencyExchange, source, destination, currentRate } = props;
  console.log('exchange rate props', source, destination, currentRate);

  return (
    <section className="app-exchange_rates-container">
      <div className="app-exchange_source-toggler">
        <i className="material-icons">swap_vert</i>
      </div>
      <div className="app-exchange_current-rate">
        <div><i className="material-icons">trending_up</i></div>
        <div>
          {
            source && destination ? `${currencyExchange[source].symbol}1 = ${currencyExchange[destination].symbol}${currentRate.toFixed(4)}` : `loading...`
          }
        </div>
      </div>
    </section>
  );
};
export default ExchangeRates;
