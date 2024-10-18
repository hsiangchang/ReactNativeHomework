import React from "react"
import { StyleSheet, Text, TouchableHighlight, View, CheckBox } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

/**
 * 首頁》任務頁
 * @returns 
 */
export default function TaskStatusScreen() {

    return (
        <View style={{flex:1}}>
            <View style={styles.headerPanel}>
                <Text style={styles.h1}>任務：產品開發與測試</Text>
                <View style={{borderColor:'gray', width:'100%', borderWidth:0.5}}></View>
            </View>
            <View style={[styles.content, {backgroundColor:'#eee', padding:10}]}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name='podium' size='24' color='black'></Ionicons>
                    <Text style={{padding:5, fontSize:18, fontWeight:'bold'}}>量化指標</Text>
                </View>
            </View>
            <View style={[styles.content, {backgroundColor:'#eee', padding:10}]}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name='heart' size='24' color='black'></Ionicons>
                    <Text style={{padding:5, fontSize:18, fontWeight:'bold'}}>質化指標</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableHighlight style={styles.btnCancel}>
                    <Text style={styles.btnText}>延期（送審）</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btnSave}>
                    <Text style={styles.btnText}>完成（送審）</Text>
                </TouchableHighlight>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    headerPanel:{
        marginTop:10,
        width:'95%',
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        alignSelf:'center',
        borderColor:'#eeeeee',
        borderWidth:1,
        backgroundColor:'black'
    },
    h1: {
        width:'100%',
        fontSize:20,
        color:'white',
        padding:10
    },
    content:{
        flex:1,
        margin:5,
        width:'95%',
        alignSelf:'center',
        backgroundColor:'red',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'white'
    },
    footer:{
        width:'95%',
        alignSelf:'center',
        flexDirection:'row'
    },
    btnCancel : {
        width:'50%',
        backgroundColor:'red',
        padding:15,
        alignItems:'center',
        borderBottomStartRadius:10
    },
    btnSave : {
        width:'50%',
        backgroundColor:'green',
        padding:15,
        alignItems:'center',
        borderBottomEndRadius:10
    },
    btnText: {
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    }
})