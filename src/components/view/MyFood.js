import React from "react"
import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native"

export default function MyFood(props) {
    return (
        <View style={styles.content}>
            <Image style={styles.storeImage} source={{uri:props.image}}/>
            <View style={{flex:1}}>
                <Text style={styles.storeName}>{props.storeName}</Text>
                <Text style={styles.foodInfo}>訂購 {props.count} 個餐點，共計 {props.sumAmt} 元</Text>
                <Text style={styles.footer}>{props.date}・{props.status}</Text>
            </View>
            <View style={{alignSelf:'center'}}>
                <TouchableHighlight style={[styles.btn, {backgroundColor:props.status === '已取消'?'gray': props.status === '準備中'?'red':'green' }  ]}>
                    <Text style={styles.btnText}>{props.status === '準備中'?'取消':'明細'}</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width:'100%',
        padding:15,
        borderBottomWidth:0.8,
        borderColor:'#ccc',
        flexDirection:'row'
    },
    storeImage: {
        width:80, 
        height:80,
        borderRadius:20
    },
    storeName: {
        fontSize:16,
        fontWeight:'bold',
        paddingStart:10,
        paddingTop:5
    },
    foodInfo: {
        paddingStart:10,
        paddingTop:5,
        flex:1
    },
    footer: {
        paddingStart:10,
        paddingTop:5
    },
    btn: {
        width:60,
        padding:10,
        backgroundColor:'green',
        alignItems:'center',
        borderRadius:10
    },
    btnText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})