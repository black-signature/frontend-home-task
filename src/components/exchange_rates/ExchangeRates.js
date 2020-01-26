import React, { useEffect } from 'react';
import './ExchangeRates.scss';

const FX_POLL_INTERVAL = 1000 * 10;
let FX_POLL_INSTANCE = null;
const ExchangeRates = (props) => {
  const { currencyExchange, uiInteractions, source, destination, currentRate, pollFXData, setTransactionDetails, transactionDetails } = props;

  useEffect(() => {
    pollFXData(uiInteractions.source, uiInteractions.destination);
    setTransactionDetails(uiInteractions.source, uiInteractions.destination, 0);

    if (uiInteractions.pollingStatus) {
      if (transactionDetails.source === null || transactionDetails.destination === null) {
        setTransactionDetails(uiInteractions.source, uiInteractions.destination, 0);
      }

      const pollMethod = () => {
        console.log(`Polling ${uiInteractions.source}, ${uiInteractions.destination}`);
        pollFXData(uiInteractions.source, uiInteractions.destination);

        clearTimeout(FX_POLL_INSTANCE);
        FX_POLL_INSTANCE = setTimeout(pollMethod, FX_POLL_INTERVAL);
      };

      clearTimeout(FX_POLL_INSTANCE);
      FX_POLL_INSTANCE = setTimeout(pollMethod, FX_POLL_INTERVAL);
    }
  }, [uiInteractions.source, uiInteractions.destination]);

  return (
    <section className="app-exchange_rates-container">
      {/* <div className="app-exchange_source-toggler">
        <i className="material-icons">swap_vert</i>
      </div> */}
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
