import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [username, setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneMessage, setPhoneMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('')

  // 執行註冊
  const sendToRegister = function() {

    // 檢查使用者帳號規則
    if( username.length < 8 ) {
      setUsernameMessage('帳號需由英文開頭，且至少 8 位英數字組成')
    } else {
      setUsernameMessage('')
    }

    // 檢查 EMAIL 規則
    if (checkRule(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setEmailMessage('')
    } else {
      setEmailMessage('請輸入合法的 EMAIL 格式')
    }

    // 檢查手機號碼規則
    if (checkRule(phone, /^09\d{8}$/)){
      setPhoneMessage('')
    } else {
      setPhoneMessage('請輸入 09 開頭的 10 位數號碼')
    }

    // 檢查輸入密碼規則
    if(password.length < 8 ){
      setPasswordMessage('請輸入 8 個以上的英數字組成之密碼')
    } else {
      setPasswordMessage('')
    }

    // 檢查確認密碼規則
    if(confirmPassword.length < 8 ){
      setConfirmPasswordMessage('請確認 8 個以上的英數字組成之密碼')
    } else if( password != confirmPassword ) {
      setConfirmPasswordMessage('請確認確認的密碼與輸入的密碼相同')
    } else {
      setConfirmPasswordMessage('')
    }

  }

  // 依正則運算進行檢核
  const checkRule = function(v, reg) {
    if (reg.test(v) === true){
      return true 
    } else {
      return false
    }
  }

  // 清除所有資料
  const clear = function() {
    setUsername('')
    setUsernameMessage('')
    setEmail('')
    setEmailMessage('')
    setPhone('')
    setPhoneMessage('')
    setPassword('')
    setPasswordMessage('')
    setConfirmPassword('')
    setConfirmPasswordMessage('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>請填寫註冊資料</Text>
      <StatusBar style="auto" />
      <View style={[styles.fieldSet, {marginTop:40}]}>
        <Text style={styles.legend}>使用者帳號</Text>
        <TextInput 
          style={styles.inuptText} 
          keyboardType='email-address'
          placeholder='請輸入 8 個以上的英數字組成之帳號'
          value={username}
          onChangeText={(v)=>setUsername(v.toLowerCase())}
          ></TextInput>
      </View>
      <Text style={styles.error}>{usernameMessage}</Text>
      <View style={styles.fieldSet}>
          <Text style={styles.legend}>EMAIL 信箱</Text>
          <TextInput 
            style={styles.inuptText} 
            keyboardType='email-address'
            placeholder='請輸入符合 EMAIL 格式的信箱'
            value={email}
            onChangeText={(v)=>setEmail(v.toLowerCase())}
            >
          </TextInput>
      </View>
      <Text style={styles.error}>{emailMessage}</Text>
      <View style={styles.fieldSet}>
          <Text style={styles.legend}>使用者手機</Text>
          <TextInput 
            style={styles.inuptText} 
            keyboardType='number-pad'
            placeholder='請輸入 09 開頭的 10 位數號碼'
            onChangeText={(v)=>setPhone(v)}
            ></TextInput>
      </View>
      <Text style={styles.error}>{phoneMessage}</Text>
      <View style={styles.fieldSet}>
          <Text style={styles.legend}>輸入使用者密碼</Text>
          <TextInput 
            style={styles.inuptText} 
            placeholder='請輸入 8 個以上的英數字組成之密碼' 
            onChangeText={(v)=>setPassword(v)}
            secureTextEntry='true'
            ></TextInput>
      </View>
      <Text style={styles.error}>{passwordMessage}</Text>
      <View style={styles.fieldSet}>
          <Text style={styles.legend}>確認使用者密碼</Text>
          <TextInput 
            style={styles.inuptText} 
            placeholder='請確認 8 個以上的英數字組成之密碼' 
            onChangeText={(v)=>setConfirmPassword(v)}
            secureTextEntry='true'></TextInput>
      </View>
      <Text style={styles.error}>{confirmPasswordMessage}</Text>
      <View style={{flexDirection: "row", width:'90%', paddingTop:15}}>
        <TouchableOpacity 
          style={styles.btnCancel}
          onPress={()=>clear()}
          >
          <Text style={styles.btnText}>清除</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=>sendToRegister()}
          style={styles.btnSave}>
          <Text style={styles.btnText}>確認</Text>
        </TouchableOpacity>
      </View>
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
  error: {
    color:'red',
    textAlign:'left',
    width:'90%',
    paddingStart:40
  },
  btnCancel : {
    width:'50%',
    backgroundColor:'gray',
    borderTopStartRadius:10,
    borderBottomStartRadius:10
  },
  btnSave : {
    width:'50%',
    backgroundColor:'blue',
    borderTopEndRadius:10,
    borderBottomEndRadius:10
  },
  btnText: {
    padding:10,
    color:'#FFF',
    fontSize:20,
    textAlign:'center'
  },
  header:{
    width:'100%',
    paddingTop:60,
    paddingBottom:10,
    textAlign:'center',
    backgroundColor:'#5A4C99',
    color:'white',
    fontSize: 20
  },
  inuptText: {
    fontSize:20,
  },
  fieldSet:{
    marginTop: 20,
    marginBottom:10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    fontSize:20,
    width:'90%',
    textAlign:'center',
    alignItems: 'center',
},
legend:{
    position: 'absolute',
    top: -10,
    left: 10,
    paddingStart:5,
    paddingEnd:5,
    fontWeight: 'bold',
    fontSize:18,
    backgroundColor: 'rgb(204,238,238)',
  }
});
