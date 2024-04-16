const GetAPIData = async (latitude: any, longitude: any, setData: any) => {
  const APIKEY = '058fb9c368b7e16b4cf061c1fe0984aa';
  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

  try {
    const result = await fetch(URL);

    if (!result.ok) {
      throw new Error('Failed to fetch data');
    }

    const finalResult = await result.json();

    setData(finalResult);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default GetAPIData;
