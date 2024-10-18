import React from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

/**
 * 首頁》任務區塊
 * @param {*} props 
 * @returns 
 */
export default function HomeTask(props) {

    return (
        <View style={props.style}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Task 本週目標（2024-10-14 ~ 2024-10-18）</Text>
            <View style={{borderWidth:2, marginTop:5, borderColor:'#3d3d3d'}}></View>
            <DataView title={'產品開發及測試'} status='1' navigation={props.navigation}/>
            <DataView title={'會議室系統建置並上線'} status='1' navigation={props.navigation}/>
            <DataView title={'OCP 技術研討及實務交流'} status='2' navigation={props.navigation}/>
            <DataView title={'辦理第四季員工大會'} status='3' navigation={props.navigation}/>
            <View style={{borderWidth:0.5, borderColor:'#3d3d3d'}}></View>
        </View>
    )

}

function DataView(props) {
    return(
        <View style={{padding:8, flexDirection:'row', backgroundColor:props.status === '1'?'#94C973': props.status === '2'?'#ECF87F':'#FFD8F0', alignItems:'center'}}>
            <Ionicons name='play' size='20' color='black'></Ionicons>
            <Text style={{flex:1, fontSize:16, fontWeight:'bold', paddingStart:5, color:'black'}}>{props.title}</Text>
            <TouchableHighlight 
                style={{padding:10, backgroundColor:'white', borderRadius:5, alignItems:'center'}}
                onPress={()=>{props.navigation.push('TaskStatusScreen')}}    
            >
                <Ionicons name='checkmark-done' size='20' style={{fontSize:16, alignContent:'center'}} color='black'>{props.status === '1'?'進行中': props.status === '2'?'努力中':'落後中'}</Ionicons>
            </TouchableHighlight>
        </View>
    )
}