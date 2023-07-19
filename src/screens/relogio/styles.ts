import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20

  },
  input: {
    width: '80%',
    borderWidth: 2,
    height: 50,
    borderColor: '#DDD',
    fontSize: 15,
    padding: 10,
    borderRadius: 5
  },
  inputTime: { 
     marginLeft: 10, 
     height: 50, 
     alignItems: 'center', 
     justifyContent: 'center' 
    },
  buttonSalvar: {
    backgroundColor: '#c521c5',
    padding: 15,
    marginTop: 20,
    width: '88%',
    alignItems: 'center',
    borderRadius: 5,
    color: 'white'
  },
  buttonText: {
    color: 'white'
  },
  BoxName: {
    borderStyle: 'solid',
    padding: 10,
    backgroundColor: '#DDD',
    borderRadius: 5,
    width: '80%',
    marginVertical: 12
  },
  clear: {
    marginTop: 10
  }
});
