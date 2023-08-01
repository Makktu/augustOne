// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.mainTextStyle}>
        Some Actual Original Content Here Soon
      </Text>
      <Text style={styles.secondaryTextStyle}>
        Signed: John Michael McNamara
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181a32',
  },
  mainTextStyle: {
    color: 'orangered',
    fontSize: 20,
  },
  secondaryTextStyle: {
    color: 'whitesmoke',
  },
});
