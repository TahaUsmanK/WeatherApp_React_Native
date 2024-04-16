import {StyleSheet} from 'react-native';

const WeatherListStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#bebebe',
  },
  IconStyle: {
    justifyContent: 'space-evenly',
  },
  IconView: {
    padding: 10,
    marginTop: '2.5%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemView: {
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 18,
    margin: 10,
    paddingBottom: 50,
    paddingTop: 50,
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
  listView: {
    flex: 1,
    flexDirection: 'column',

    right: '58%',
  },
  listItemCountryText: {
    fontSize: 25,
    left: '15%',
    color: 'black',
  },
  listItemCityStyle: {
    marginTop: '7%',
    left: '15%',
    fontSize: 20,
    fontWeight: '300',

    color: 'black',
  },
  textView: {
    flexDirection: 'row',
  },
  listItemDescription: {
    marginTop: '45%',
    right: '80%',
    fontSize: 20,
    color: 'black',
    fontWeight: '300',
  },
  listItemTemperature: {
    marginTop: '25%',
    right: '15%',
    fontWeight: '300',
    fontSize: 28,
    color: 'black',
  },
});

export default WeatherListStyle;
