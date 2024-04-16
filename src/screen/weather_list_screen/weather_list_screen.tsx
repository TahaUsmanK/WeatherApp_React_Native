import {Button, Text, View} from 'react-native';

const WeatherListScreen = (props: any) => {
  return (
    <View>
      <Text>WeatherListScreen</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default WeatherListScreen;
