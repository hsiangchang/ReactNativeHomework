import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  // 驗證碼
  const [validCode, setValidCode] = useState('')
  
  // 正常訊息
  const [infoMsg, setInfoMsg] = useState('')
  
  // 異常訊息
  const [errorMsg, setErrorMsg] = useState('')

  // 按下清除按鈕:清除相關欄位及訊息
  const clear = function() {
    setInfoMsg('')
    setErrorMsg('')
  }

  // 按下確認按鈕:檢核驗證碼
  const confirm = function() {
    clear()
    if( validCode === '1234') {
      setInfoMsg('驗證碼正確')
    } else {
      setErrorMsg('驗證碼錯誤')
    }
  }

  // 即時處理輸入驗證碼長度訊息
  const getCode = function() {
    if(validCode.length == 0) {
      return <Text>未輸入任何驗證碼</Text>
    } else {
      return <Text>已輸入 {validCode.length} 位驗證碼</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>第 1 章，作業 3 - 密碼判斷APP</Text>
      <View style={[styles.fieldSet, { marginTop: 40 }]}>
        <Text style={styles.legend}>請輸入驗證碼</Text>
        <TextInput
          style={styles.inuptText}
          keyboardType='numeric'
          value={validCode}
          onChangeText={(v)=>{clear(),setValidCode(v)}}
          secureTextEntry={true}
          maxLength={4}
        ></TextInput>
      </View>
      <Text style={{paddingBottom:10, fontSize:12, fontWeight:'bold'}}>{getCode()}</Text>
      <View style={{ flexDirection: "row", width: '90%' }}>
        <TouchableOpacity
          style={styles.btnMinus}
          onPress={() => {clear(), setValidCode('')}}
        >
          <Text style={styles.btnText}>清除</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => confirm()}
        >
          <Text style={styles.btnText}>確認</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.info}>{infoMsg}</Text>
      <Text style={styles.error}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(204,238,238)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnMinus: {
    width: '50%',
    backgroundColor: 'red',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10
  },
  btnPlus: {
    width: '50%',
    backgroundColor: 'green',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10
  },
  btnText: {
    padding: 10,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center'
  },
  info: {
    marginTop:20,
    color:'green',
    fontSize:24,
    fontWeight:'bold'
  },
  error: {
    marginTop:20,
    color:'red',
    fontSize:24,
    fontWeight:'bold'
  },
  header: {
    width: '100%',
    paddingTop: 60,
    paddingBottom: 10,
    textAlign: 'center',
    backgroundColor: '#5A4C99',
    color: 'white',
    fontSize: 20
  },
  inuptText: {
    fontSize: 20,
    textAlign:'center',
    width:'90%'
  },
  fieldSet: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 20,
    width: '90%',
    textAlign: 'center',
    alignItems: 'center',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    paddingStart: 5,
    paddingEnd: 5,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'rgb(204,238,238)',
  }
});
