import fetcher from "@components/helpers/fetcher";
import { convertFromKelvin } from "@components/helpers/weather";
import {
  COORDINATES,
  CURRENT_LOCATION,
  CURRENT_WEATHER_BASE_ENDPOINT,
} from "@constants/index";
import { useEffect, useState } from "react";
import { useCurrentTime } from "src/hooks/useCurrentTime";
import { TWeather } from "src/types";

const API_ENDPOINT = `${CURRENT_WEATHER_BASE_ENDPOINT}lat=${COORDINATES.latitude}&lon=${COORDINATES.longitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

const Location = () => {
  const { currentTime } = useCurrentTime();
  const [weather, setWeather] = useState<TWeather>();

  useEffect(() => {
    async function getCurrentWeather() {
      try {
        const response = await fetcher(API_ENDPOINT);
        setWeather(response);
      } catch (err) {
        console.error(err);
      }
    }

    getCurrentWeather();
  }, []);

  const { tempInCelsius, tempInFahrenheit } = convertFromKelvin(
    weather?.main.temp || 0
  );

  return (
    <section className="flex flex-col md:flex-row md:ml-16">
      <div className="flex items-center mb-1">
        <span className="text-zinc-400 text-xs mr-2 md:mr-6">
          {currentTime}
        </span>
        <span className="text-zinc-50 text-xs mr-2 md:mr-6">
          {CURRENT_LOCATION}
        </span>
      </div>
      <span className="text-zinc-300 text-xs mt-1 mr-2 text-right md:mt-0">
        {tempInCelsius}/{tempInFahrenheit}
      </span>
    </section>
  );
};

export default Location;
