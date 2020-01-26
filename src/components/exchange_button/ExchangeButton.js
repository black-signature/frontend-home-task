import React from 'react';
import './ExchangeButton.scss';

const ExchangeButton = (props) => {
  const { onExchange, source, destination, amount, rate } = props;  

  const onExchangeClick = (source, destination, amount, rate) => {    
    onExchange(source, destination, amount, rate);
  };

  return (
    <section className="app-exchange_button-container">
      <button className="app-main__button" onClick={() => onExchangeClick(source, destination, amount, rate)}>Exchange</button>
    </section>
  );
};
export default ExchangeButton;
