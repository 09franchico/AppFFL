import { StyleSheet, View } from 'react-native';
import { Routes } from './src/routers';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
