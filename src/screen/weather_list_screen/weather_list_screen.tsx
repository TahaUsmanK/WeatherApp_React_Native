import {FlatList, Image, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import WeatherListStyle from '../../style/weather_list_style/weather_list_style';
import TextInputStyle from '../../style/textinput_style/textinput_style';
import {useState} from 'react';
import HomeStyle from '../../style/home_style/home_style';

const WeatherListScreen = (props: any) => {
  const [data, setData] = useState<any>(null);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textValidaiton, setTextValidation] = useState(false);

  const fetchData = async (city: String) => {
    try {
      const APIKEY = '058fb9c368b7e16b4cf061c1fe0984aa';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
      const result = await fetch(URL);
      const finalResult = await result.json();
      setData(finalResult);
      console.error(finalResult);
    } catch (error) {
      console.error(error);
    }
  };

  const searchData = () => {
    if (!textFieldValue) {
      setTextValidation(true);
    } else if (textFieldValue) {
      setTextValidation(false);
      fetchData(textFieldValue);
    }
  };

  return (
    <View>
      <View style={WeatherListStyle.IconView}>
        <Icon.Button
          style={WeatherListStyle.IconStyle}
          name="arrow-left"
          size={20}
          color="#333333"
          backgroundColor={'transparent'}
          underlayColor={'white'}
          onPress={() => props.navigation.goBack()}
        />
        <TextInput
          style={
            textValidaiton
              ? TextInputStyle.textInputValidation
              : TextInputStyle.textInput
          }
          placeholderTextColor={textValidaiton ? 'red' : 'black'}
          placeholder={textValidaiton ? 'Enter City Name' : 'Search'}
          value={textFieldValue}
          onChangeText={value => setTextFieldValue(value)}
        />

        <Icon.Button
          style={WeatherListStyle.IconStyle}
          name="search"
          size={20}
          color="#333333"
          backgroundColor={'transparent'}
          underlayColor={'white'}
          onPress={() => searchData()}
        />
      </View>
      {data ? (
        <FlatList
          data={[data]}
          renderItem={({item}) => (
            <View style={WeatherListStyle.listItemView}>
              <Text style={WeatherListStyle.listItemCountryText}>
                {item.sys.country}
              </Text>
              <Text style={WeatherListStyle.listItemCityStyle}>
                {item.name}
              </Text>
              <Text style={WeatherListStyle.listItemTemperature}>
                {data.main.temp + '°'}
              </Text>
              <Text style={WeatherListStyle.listItemDescription}>
                {data ? data.weather[0].description : ''}
              </Text>
              <View style={WeatherListStyle.listView}>
                <Image
                  style={WeatherListStyle.imageStyle}
                  source={{
                    uri: `https://openweathermap.org/img/wn/${
                      data ? data.weather[0].icon : '01d'
                    }@2x.png`,
                  }}
                />
                <View style={WeatherListStyle.textView}>
                  <Text>{data ? 'H: ' + data.main.temp_max + '°' : '0°'}</Text>
                  <Text> | </Text>
                  <Text>{data ? 'L: ' + data.main.temp_min + '°' : '0°'}</Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default WeatherListScreen;
