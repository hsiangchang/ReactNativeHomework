import { StyleSheet,  Button, View } from 'react-native'
import HomeOKR from '../components/view/HomeOKR'
import HomeTask from '../components/view/HomeTask'
import HomeJob from '../components/view/HomeJob';

/**
 * 首頁》主頁面組成
 * @param {*} props 
 * @returns 
 */
export default function HomeScreen(props) {

  return (
    <View style={styles.container}>
        <HomeOKR style={styles.panel}/>
        <HomeTask style={styles.panel} navigation={props.navigation}/>
        <HomeJob style={styles.info}/>
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
  },
  info:{
    margin:12,
    padding:10,
    borderRadius:10,
    borderColor:'#3d3d3d',
    borderWidth:0.8
  }
});

