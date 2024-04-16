import React from 'react';
import HomeScreen from './src/screen/home_screen/home_screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WeatherListScreen from './src/screen/weather_list_screen/weather_list_screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="WeatherList" component={WeatherListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
