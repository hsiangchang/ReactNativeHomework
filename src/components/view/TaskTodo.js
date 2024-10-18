import React from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

/**
 * 任務頁》待執行項目區塊
 * @param {*} props 
 * @returns 
 */
export default function TaskTodo(props) {

    return (
        <View style={props.style}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Task 待執行項目</Text>
            <View style={{borderWidth:2, marginTop:5, borderColor:'#3d3d3d'}}></View>
            <DataView title={'尾牙籌備起始會議'}/>
            <DataView title={'簡訊系統規劃與協調'}/>
            <DataView title={'財務會計導入總帳系統'}/>
            <DataView title={'新人教育訓練規劃'}/>
            <View style={{borderWidth:0.5, borderColor:'#3d3d3d'}}></View>

        </View>
    )

}

function DataView(props) {
    return (
        <View style={{padding:8, flexDirection:'row', backgroundColor:'#ddd', alignItems:'center'}}>
            <Ionicons name='help' size='20' color='black'></Ionicons>
            <Text style={{flex:1, fontSize:16, fontWeight:'bold', paddingStart:5, color:'black'}}>{props.title}</Text>
            <TouchableHighlight 
                style={{padding:10, backgroundColor:'white', borderRadius:5, alignItems:'center'}}
                onPress={()=>{props.navigation.push('TaskStatusScreen')}}    
            >
                <Ionicons name='hammer' size='20' style={{fontSize:16, alignContent:'center'}} color='black'></Ionicons>
            </TouchableHighlight>
        </View>
    )
}