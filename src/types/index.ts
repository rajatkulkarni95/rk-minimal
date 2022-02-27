export interface Size {
  width: number | undefined;
  height: number | undefined;
}

export type TWeather = {
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
    }
  ];
};
