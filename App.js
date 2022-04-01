import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <View style={styles.Image}>
            <Image
              style={{ width: 80, height: 80 }}
              source={require('./assets/Logo.png')}
            />
          </View>
          <View>
            <Text style={styles.Text}>
              Email:
            </Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.Text}>
              Senha:
            </Text>
            <TextInput style={styles.textInput}/>
          </View>
          <View style={styles.containerButton}>
            <Button
            title='Login'
            color='purple'
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FBEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image:{
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  Text:{
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  textInput:{
    flexDirection: 'row',
    width: 270,
    height:25,
    borderColor: '#000',
    borderWidth:1,
    borderRadius: 10,
    marginTop: 6,
    marginLeft: 6,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '80%',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.45,
    shadowRadius: 20,
  },
  containerButton: {
    marginTop: 30,
    width: '95%',
    marginLeft: 9,
  },
});
