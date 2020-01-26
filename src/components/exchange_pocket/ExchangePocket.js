import React, { useRef } from 'react';
import './ExchangePocket.scss';

const ExchangePocket = (props) => {
  const { type, allCurrencies, currencyExchange, transactionDetails, pocketsPair, onInputChange, onSelectCurrency, setTransactionDetails } = props;
  let selectedCurrency = type === "source" ? pocketsPair.source : pocketsPair.destination;
  let balance = currencyExchange[selectedCurrency].amount;
  let symbol = currencyExchange[selectedCurrency].symbol;
  let currentCurrencySel = useRef(null);
  let currentCurrencyInput = useRef(null);

  const onCurrencyChange = () => {
    selectedCurrency = currentCurrencySel.current.value;
    currentCurrencyInput.current.value = "";

    let currInputVal = currentCurrencyInput.current.value === "" ? 0 : currentCurrencyInput.current.value;
    if (type === "source") {
      onSelectCurrency(selectedCurrency, pocketsPair.destination);
      setTransactionDetails(selectedCurrency, pocketsPair.destination, parseFloat(currInputVal));
    }
    else {
      onSelectCurrency(pocketsPair.source, selectedCurrency);
      setTransactionDetails(pocketsPair.source, selectedCurrency, parseFloat(currInputVal));
    }
  };

  const onInputCurrency = () => {
    let currInputVal = currentCurrencyInput.current.value === "" ? 0 : currentCurrencyInput.current.value.replace(/^0+/, '');
    selectedCurrency = currentCurrencySel.current.value;

    if (type === "source") {
      onInputChange(selectedCurrency, pocketsPair.destination);
      setTransactionDetails(selectedCurrency, pocketsPair.destination, parseFloat(currInputVal));
      realTimeCurrencyConversion("source");
    }
    else {
      onInputChange(pocketsPair.destination, pocketsPair.source);
      realTimeCurrencyConversion("destination");
    }
  };

  const realTimeCurrencyConversion = (type) => {
    if (transactionDetails.rate !== 1 && transactionDetails.source !== null && transactionDetails.destination !== null) {
      let sourcePocket = document.querySelector('.app-exchange_pocket.source .app-exchange_amount-input input');
      let targetPocket = document.querySelector('.app-exchange_pocket.destination .app-exchange_amount-input input');

      if (type === "source") {
        let currPocketAmount = sourcePocket.value;
        let convertedAmt = (currPocketAmount * transactionDetails.rate).toFixed(2);

        targetPocket.value = convertedAmt;
      }
      else {
        let currPocketAmount = targetPocket.value;
        let convertedAmt = (currPocketAmount * transactionDetails.rate).toFixed(2);

        sourcePocket.value = convertedAmt;
      }
    }
  };

  return (
    <section className={`app-exchange_pocket ${type}`}>
      <div className="app-exchange_currency-container">
        <div className="app-exchange_currency-selector">
          <div className="app-select_custom">
            <select defaultValue={selectedCurrency} ref={currentCurrencySel} onChange={onCurrencyChange}>
              {
                allCurrencies.map((currency, index) => <option key={`currKey_${index}`} value={currency}>{currency}</option>)
              }
            </select>
          </div>
        </div>
        <div className="app-exchange_amount-input">
          <input type="number" placeholder={0.00} ref={currentCurrencyInput} onKeyUp={onInputCurrency} step=".01" />
        </div>
      </div>
      <div className="app-exchange_balance">
        <span>Balance:</span>
        <span className="app-exchange_source__currnency-symbol">{symbol}</span>
        <span>{balance.toFixed(2)}</span>
      </div>
    </section>
  );
};
export default ExchangePocket;
