import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }
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
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text = {item} />
                </TouchableOpacity>
              )
            }) 
          }
          {/* <Task text='Task 1' priority='High' category='Work'/>
          <Task text='Task 2' priority='High' category='Work'/> */}
        </View>
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios"? "padding" : "height"}
      style={styles.writeTaskWrapper}>
          <TextInput style={ styles.input} placeholder="Write a Task" value={task} onChangeText={text => setTask(text)}/> 
          <TouchableOpacity onPress={()=> handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text stle={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        
      </KeyboardAvoidingView>
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
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
