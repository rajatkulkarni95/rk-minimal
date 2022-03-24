export const convertFromKelvin = (temp: number) => {
  const tempInCelsius = `${Math.round(temp - 273.15)}°C`;
  const tempInFahrenheit = `${Math.round((temp - 273.15) * 9) / 5 + 32}°F`;

  return { tempInCelsius, tempInFahrenheit };
};
