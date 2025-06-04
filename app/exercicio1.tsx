import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function exercicio1() {
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.primeiroTexto}>Meu primeiro App Expo</Text>
        <Text style = {styles.segundoTexto}>Construindo interfaces no React Native</Text>
        
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',

  },
primeiroTexto:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight:'bold'
},
segundoTexto:{
  color: 'white',
    fontSize: 23,
    textAlign: 'center'
}
});
