import { StyleSheet, View } from 'react-native';
import HomeTask from '../components/view/HomeTask';
import TaskTodo from '../components/view/TaskTodo';

/**
 * 頁面》我的任務
 */
export default function TaskScreen() {

  return (
    <View style={styles.container}>
      <HomeTask style={styles.panel}/>
      <TaskTodo style={[styles.panel, {flex:1}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panel:{
    margin:12,
    padding:10,
    borderRadius:10,
    borderColor:'#3d3d3d',
    borderWidth:0.8
  }
});

