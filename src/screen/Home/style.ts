import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: 'white',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: height * 0.02
  },
  buttonsHeader: {
    flexDirection: 'row',
    gap: width * 0.07
  },
  containerContacts: {
    height: height * 0.73,
    alignItems: 'center',
  },
  titleContainerSectionContacts:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: height * 0.019,
    color: 'black',
  },
  containerNotContactsAviable: {
    height: height * 0.73,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgNoContactsAviable: {
    width: width * 0.55,
    height: height * 0.55,
    marginLeft: width * 0.06
  },
  textNoContactsAviable: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000'
  },
  spamNoContacts:{
    color: '#79169D'
  }
});
