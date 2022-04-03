import React from 'react';
import { Text, View, StyleSheet, Pressable, SafeAreaView, TextInput, Image } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'CONTINUAR' } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Image}>
        <Image
          style={{ width: 120, height: 120 }}
          source={require('./assets/Logo.png')}
          />
        </View>
       <View style={[styles.card, styles.shadowProp]}>
          <View style={styles.containerTitle}>
            <Text style={styles.Title}>
              Faça seu login
            </Text>
          </View>
          <View>
            <Text style={styles.Text}>CPF</Text>
            <TextInput
            style={styles.textInput}
            label="CPF"
            placeholder='000.000.000-00'
            />
          </View>

          <View>
            <Text style={[styles.Text, styles.senha]}>Senha</Text>
            <TextInput
            style={styles.textInput}
            label="CPF"
            placeholder='Sua senha'
            />
          </View>

         <View style={[styles.containerButton]}>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={[styles.text]}>{title}</Text>
            </Pressable>
          </View>
          <View style={styles.containerbottomText}>
            <Text style={styles.bottomText}>
              Esqueci minha senha
            </Text>
          </View>
          <View style={styles.containerbottomText}>
            <Text style={styles.bottomText}>
              Ainda não sou cliente 
            </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#612F74',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image:{
    alignItems: 'center',
    top: 25,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
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
  containerTitle:{
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  Title:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput:{
    width: '97%',
    padding: 2,
    borderColor: '#000',
    borderBottomWidth:1,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 2,
    elevation: 3,
    borderColor: '#46244C',
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 15,
  },
  Text:{
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  senha:{
    marginTop: 30,
   
  },
  text: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#46244C',
  },
  bottomText:{
    color: '#612F74',
    
  },
  containerbottomText:{
    alignItems: 'center',
    margin: 8,
    fontWeight: 'bold',
  },
});
