import {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import GetAPIData from '../../service/API_service/API_service';
import GetLocationPermission from '../../service/location_service/location_service';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStyle from '../../style/home_style/home_style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WeeklyAndHourlyForcast from '../../component/weekly_and_hourly_forcast/weekly_and_hourly_forcast';

const HomeScreen = (props: any) => {
  const [data, setData] = useState([]);
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const Tab = createMaterialTopTabNavigator();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    await GetLocationPermission(setLat, setLon);
    await GetAPIData(lat, lon, setData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    if (data) {
      console.log(data);
    }
  }, []);

  if (isLoading === false) {
    return (
      <View style={HomeStyle.main}>
        <View style={HomeStyle.IconView}>
          <Icon.Button
            style={HomeStyle.IconStyle}
            name="location-arrow"
            size={20}
            color="#333333"
            backgroundColor={'transparent'}
            underlayColor={'white'}
            onPress={() => fetchData()}
          />
          <Text style={HomeStyle.AppBarText}>
            {data ? data.name + ' | ' + data.sys.country : 'London | UK'}
          </Text>
          <Icon.Button
            style={HomeStyle.IconStyle}
            name="list"
            size={20}
            color="#333333"
            backgroundColor={'transparent'}
            underlayColor={'white'}
            onPress={() => props.navigation.push('WeatherList')}
          />
        </View>
        <Text style={HomeStyle.weatherDescriptionText}>
          {data ? data.weather[0].description : 'Sunny'}
        </Text>
        <Image
          style={HomeStyle.ImageStyle}
          source={{
            uri: `https://openweathermap.org/img/wn/${
              data ? data.weather[0].icon : '01d'
            }@2x.png`,
          }}
        />

        <Text style={HomeStyle.temperatureText}>
          {data ? data.main.temp + '°' : '0°'}
        </Text>

        <View style={HomeStyle.temperatureMinMaxView}>
          <Text style={HomeStyle.temperatureMinMaxText}>
            {data ? 'H: ' + data.main.temp_max + '°' : '0°'}
          </Text>
          <Text style={HomeStyle.temperatureMinMaxText}>|</Text>
          <Text style={HomeStyle.temperatureMinMaxText}>
            {data ? 'L: ' + data.main.temp_min + '°' : '0°'}
          </Text>
        </View>

        <View style={HomeStyle.tabView}>
          <WeeklyAndHourlyForcast />
        </View>
      </View>
    );
  } else if (isLoading === true) {
    return (
      <View style={HomeStyle.actitiyIndicatorStyle}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }
};
export default HomeScreen;
