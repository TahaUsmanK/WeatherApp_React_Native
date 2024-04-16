const GetAPIData = async (latitude: any, longitude: any, setData: any) => {
  const APIKEY = '058fb9c368b7e16b4cf061c1fe0984aa';
  const URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
  const result = await fetch(URL);
  const finalResult = await result.json();
  setData(finalResult);
};

export default GetAPIData;
