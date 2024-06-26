import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import GetLocationPermission from '../../service/location_service/location_service';
import HomeStyle from '../../style/home_style/home_style';

const WeeklyAndHourlyForcast = () => {
  const [data, setData] = useState(null);
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await GetLocationPermission(setLat, setLon);
      const APIKEY = '058fb9c368b7e16b4cf061c1fe0984aa';
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
      const result = await fetch(URL);
      if (!result.ok) {
        throw new Error('Failed to fetch data');
      }
      const finalResult = await result.json();
      setData(finalResult);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={HomeStyle.actitiyIndicatorStyle}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={HomeStyle.errorView}>
        <Text style={HomeStyle.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={HomeStyle.flatListView}>
      {data && (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
          style={HomeStyle.flatListStyle}
          data={data.list}
          horizontal={true}
          renderItem={({item}) => (
            <View style={HomeStyle.flatListItemView}>
              <Text>{item.dt_txt}</Text>
              <Image
                style={HomeStyle.flatListImageStyle}
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                }}
              />
              <Text style={HomeStyle.flatListText}>{item.main['temp']}°</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default WeeklyAndHourlyForcast;
