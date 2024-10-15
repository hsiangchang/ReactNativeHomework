import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const imageUris = [
    'https://i.pinimg.com/736x/98/69/e4/9869e47241deb630ac142037e9977524.jpg',
    'https://img5.pcpop.com/bizhi/big/10/181/771/10181771.jpg',
    'https://obs.line-scdn.net/0hFRn2YpVmGX1TSw70MhVmKm0dRFMoOABvLjMUH3BDFR57K1gob3gGS3QYRRope1subCheEiQYE0p4KFk'
  ]

  const [count, setCount] = useState('0')
  const [imageUri, setImageUri] = useState(imageUris[0])

  const plus = function (v) {
    v = parseInt(count) + v
    setCount('' + v)
  }

  const changeImage = function (v) {
    setImageUri(imageUris[v])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>第 1 章，作業 2 - 按鈕組件應用</Text>
      <View style={[styles.fieldSet, { marginTop: 40 }]}>
        <Text style={styles.legend}>計數器</Text>
        <TextInput
          style={styles.inuptText}
          value={count}
          editable={false}
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", width: '90%' }}>
        <TouchableOpacity
          style={styles.btnMinus}
          onPress={() => plus(-1)}
        >
          <Text style={styles.btnText}>減少</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => plus(1)}
        >
          <Text style={styles.btnText}>增加</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageContent}
        source={{ uri: imageUri }}
      >
      </Image>
      <View style={{ flexDirection: "row", width: '90%', marginBottom: 30 }}>
        <TouchableOpacity
          style={[styles.btnNav, { backgroundColor: '#F5B428' }]}
          onPress={() => changeImage(0)}
        >
          <Text style={[styles.btnText, { color: 'black' }]}>勇士隊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnNav, { backgroundColor: '#94002D' }]}
          onPress={() => changeImage(1)}
        >
          <Text style={styles.btnText}>熱火隊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnNav, { backgroundColor: '#005082' }]}
          onPress={() => changeImage(2)}
        >
          <Text style={styles.btnText}>灰狼隊</Text>
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
  imageContent: { 
    width: '90%', 
    backgroundColor: 'pink', 
    marginTop: 20, 
    borderTopStartRadius: 20, 
    borderTopEndRadius: 20, 
    flex: 1 
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
  btnNav: {
    width: '33.3%',
    backgroundColor: 'blue',
  },
  btnText: {
    padding: 10,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center'
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
