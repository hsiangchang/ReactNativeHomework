import React from "react"
import {View, Text, Image} from 'react-native'

/**
 * 首頁》職務區塊
 * @param {*} props 
 * @returns 
 */
export default function HomeJob(props) {

    return (
        <View style={[props.style, {flex:1}]}>
            <Text style={{fontWeight:'bold', fontSize:16}}>職務：執行長 》張建祥 HSIANG</Text>
            <View style={{borderWidth:2, marginTop:5, borderColor:'#3d3d3d'}}></View>
            <View style={{flexDirection:'row', flex:1, padding:10, backgroundColor:'#ccc'}}>
                <Image style={{height:'auto', width:120, borderRadius:10}} source={{uri:'https://r2.erweima.ai/imgcompressed/compressed_8e8fc96d42ae3cc09b3e15772c874070.webp'}}></Image>
            </View>
        </View>
    )

}