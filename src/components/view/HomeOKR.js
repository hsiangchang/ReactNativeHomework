import React from "react"
import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

/**
 * 首頁》OKR 季指標區塊
 * @param {*} props 
 * @returns 
 */
export default function HomeOKR(props) {
    return (
        <View style={props.style}>
            <Text style={{fontWeight:'bold', fontSize:16}}>OKR 本季目標（截止日：2025-03-31 ）</Text>
            <View style={{borderWidth:2, marginTop:5, borderColor:'#3d3d3d'}}></View>
            <DataView title={'營業額成長至 5,000 萬'} require={true}/>
            <DataView title={'凝聚團隊向心力，邏向六年零離職率'} require={true}/>
            <DataView title={'員工人數成長至 40 人'} require={true}/>
            <DataView title={'營業淨利 2,000 萬'}/>
            <DataView title={'增加 3 個客戶數'}/>
        </View>
    )
}

function DataView(props) {
    return (
        <View style={{paddingTop:8, flexDirection:'row'}}>
            <Ionicons name='bookmark' size='20' color={props.require?'red':'black'}></Ionicons>
            <Text style={{fontSize:16, fontWeight:'bold'}}>{props.title}</Text>
        </View>
    )
}