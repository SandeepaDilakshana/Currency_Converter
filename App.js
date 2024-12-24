import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyBoardAvoidingView>
          <View style={styles.container}>
            <Text variant="displayMedium">Currency Converter</Text>
            <StatusBar style="auto" />
          </View>
        </KeyBoardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
