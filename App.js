import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionHeader}>
          Hello Ron
        </Text>
        <Text style={styles.subHeader}>
          Let's be productive today
        </Text>
        <View style={styles.items}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEBFF',
  },
  tasksWrapper: {
    paddingTop: 63,
    paddingHorizontal: 30,
  },
  sectionHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4600A1',
  },
  subHeader: {
    fontSize: 21,
  },
  items: {
    
  },
});
