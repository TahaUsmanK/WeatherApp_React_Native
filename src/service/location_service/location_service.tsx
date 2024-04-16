import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';
import GetAPIData from '../API_service/API_service';

const GetLocationPermission = async (setLat: any, setLan: any) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude);
          setLan(position.coords.longitude);
        },
        error => console.log(error.message),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        },
      );
    } else {
      console.error('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export default GetLocationPermission;
