import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import MyFood from './src/components/view/MyFood';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>訂單資料</Text>
      <StatusBar style="auto" />

      <View
        style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.8,
        width:'100%',
        marginTop:10
      }}/>

      <MyFood 
        title='麥當勞南港中信門市' 
        count='2' 
        sum='340'
        date='10月12日'
        status='準備中'
        image='https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg'/>
      <MyFood 
        title='麥味登基隆長庚店' 
        count='4' 
        sum='325'
        date='10月11日'
        status='已取消'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRLwJY8m-dtFYyzDxEbUr-Bn8W4WIbqJzEg&s'/>
      <MyFood 
        title='美而美汐止民峰店'
        count='3' 
        sum='215'
        date='10月09日'
        status='已完成'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMSX6uBUUQze22O3WLBM-XxK3NvhRSjW-Cw&s'/>
      <MyFood 
        title='星巴克南港園區門市'
        count='3' 
        sum='215'
        date='10月04日'
        status='已完成'
        image='https://media.gq.com.tw/photos/5dbc7df10327d200088366e3/16:9/w_1280,c_limit/2017022171286265.jpg'/>
      <MyFood 
        title='全聯南港旗鑑門市'
        count='2' 
        sum='315'
        date='10月02日'
        status='已完成'
        image='https://www.brandinlabs.com/wp-content/uploads/2014/05/PX.gif'/>
      <MyFood 
        title='非常泰南港中信門市'
        count='6' 
        sum='1800'
        date='09月28日'
        status='已完成'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS80F0fCus8BIHRqWPoPWTmUMKD6ruIcR1Q&s'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginTop:60,
    fontSize:20,
    fontWeight:'bold'
  }
});

