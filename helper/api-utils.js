// Get all currencies API
export async function getAllCurrencies() {
  const response = await fetch(
    "https://api.coinbase.com/v2/currencies"
  );
  const data = await response.json();
  return data;
}

// SpaceX API to get all space shuttles
export async function getSpacexShuttles() {
  const response = await fetch(
    "https://api.spacexdata.com/v3/launches?limit=100"
  );
  const data = await response.json();
  return data;
}
