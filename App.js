import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';

export default function App() {
  return (
    <PaperProvider>
       <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Header />
              <StatusBar style="auto" />
            </View>
          </ScrollView>
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
