import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';

const GetLocationPermission = async (setLat: any, setLon: any) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        error => {
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        },
      );
    } else {
      console.warn('Location permission denied');
    }
  } catch (error) {
    console.error('Error requesting location permission:', error);
  }
};

export default GetLocationPermission;
