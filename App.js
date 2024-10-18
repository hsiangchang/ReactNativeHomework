import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MyFood from './src/component/view/MyFood';

const MOCKED_DATA = [
  {
    storeName:'麥當勞南港中信門市',
    count:2,
    sumAmt:420,
    date:'2024年10月12日',
    status:'準備中',
    image:'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg'
  },
  {
    storeName:'麥味登基隆長庚店',
    count:4,
    sumAmt:325,
    date:'2024年10月11日',
    status:'已取消',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRLwJY8m-dtFYyzDxEbUr-Bn8W4WIbqJzEg&s'
  },
  {
    storeName:'美而美汐止民峰店',
    count:3,
    sumAmt:215,
    date:'2024年10月09日',
    status:'已完成',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMSX6uBUUQze22O3WLBM-XxK3NvhRSjW-Cw&s'
  },
  {
    storeName:'星巴克南港園區門市',
    count:3,
    sumAmt:870,
    date:'2024年10月04日',
    status:'已完成',
    image:'https://media.gq.com.tw/photos/5dbc7df10327d200088366e3/16:9/w_1280,c_limit/2017022171286265.jpg'
  },
  {
    storeName:'全聯南港旗鑑門市',
    count:2,
    sumAmt:315,
    date:'2024年10月02日',
    status:'已完成',
    image:'https://www.brandinlabs.com/wp-content/uploads/2014/05/PX.gif'
  },
  {
    storeName:'非常泰南港中信門市',
    count:4,
    sumAmt:1640,
    date:'2024年09月28日',
    status:'已完成',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS80F0fCus8BIHRqWPoPWTmUMKD6ruIcR1Q&s'
  },
]

export default function App() {

  const [dataSource, setDataSource] = useState([])

  // 渲染每筆訂單
  function renderOrder(order) {
    return (
      <MyFood 
        storeName={order.item.storeName}
        count={order.item.count} 
        sumAmt={order.item.sumAmt}
        date={order.item.date}
        status={order.item.status}
        image={order.item.image}/>
    )
  }

  // 畫面讀取後進行資料讀取
  useEffect(()=>{
    setDataSource(MOCKED_DATA)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.header}>訂單資料</Text>

      <View
        style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.8,
        width:'100%',
        marginTop:10
      }}/>
      <FlatList 
        data={dataSource}
        renderItem={(order)=>renderOrder(order)}
        style={{width:'95%', alignSelf:'center', marginTop:10, marginBottom:30, borderRadius:10, borderWidth:1, borderColor:'#999999'}}
      />
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

