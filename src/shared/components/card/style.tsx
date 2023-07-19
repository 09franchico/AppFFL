import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'white',
      borderRadius:5,
      marginTop:5,
      padding:10,
    },
    textDesc:{
      fontSize:20,
      fontWeight:'bold'
    },
    containerCard:{
      flex:1,
      padding:5
    },
    containerTime:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:5
    }
  });