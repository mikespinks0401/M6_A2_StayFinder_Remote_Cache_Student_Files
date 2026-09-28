const BASE_URL =
  'https://api.open-meteo.com/v1/forecast';

export async function getTravelConditions(
  latitude,
  longitude
) {
  // TODO 1: Build the request URL
  const url =
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}` +
    '&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m' +
    '&temperature_unit=fahrenheit&wind_speed_unit=mph';
 
  // TODO 2: Send the request
  const response = await fetch(url);
 
  // TODO 3: Fail on non-2xx status
  if (!response.ok) {
    throw new Error(
      `Weather request failed: ${response.status} ${response.statusText}`
    );
  }
 
  // TODO 4: Parse the JSON body
  const data = await response.json();
 
  // TODO 5: Return only the fields we need
  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    windSpeed: data.current.wind_speed_10m
  };
 
}
