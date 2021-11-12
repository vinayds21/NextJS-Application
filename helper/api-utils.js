export async function getAllCurrencies() {
  const response = await fetch(
    "https://api.coinbase.com/v2/currencies"
  );
  const data = await response.json();
  return data;
}
