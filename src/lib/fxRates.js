// const APP_ID = 'e134de7d84464af3b67c6df1e78ecb2d';
// const FX_RATES_API_BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=e134de7d84464af3b67c6df1e78ecb2d`;

const FX_RATES_API_BASE_URL = `https://api.exchangeratesapi.io/latest`;

export const getFxRate = async (source, destination) => {
  try {
    const fxPromise = [fetch(`${FX_RATES_API_BASE_URL}?symbols=${destination}&base=${source}`).then(res => res.json())];
    const [fxData] = await Promise.all(fxPromise);

    return fxData;
  }
  catch (e) {
    console.error(e);
    return {};
  }
};
