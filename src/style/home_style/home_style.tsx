import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
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
  AppBarText: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
  ImageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  weatherDescriptionText: {
    marginTop: '12%',
    fontSize: 25,
    color: 'black',
    fontWeight: '300',
    alignSelf: 'center',
  },
  temperatureText: {
    fontSize: 80,
    color: 'black',
    fontWeight: '200',
    alignSelf: 'center',
  },
  temperatureMinMaxText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
    alignSelf: 'center',
  },
  temperatureMinMaxView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '5%',
    paddingLeft: '30%',
    paddingRight: '30%',
  },
  tabView: {
    flex: 1,
    marginTop: '30%',
  },
  actitiyIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListStyle: {
    backgroundColor: '#bebebe',
  },
  flatListImageStyle: {
    width: 54,
    height: 54,
    alignSelf: 'center',
  },
  flatListView: {
    flexDirection: 'column',
    flex: 1,
  },
  flatListItemView: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 18,
    margin: 10,
    paddingBottom: 50,
    paddingTop: 50,
    padding: 10,
  },
  flatListText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default HomeStyle;
