import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function exercicio3() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}><Text style={styles.texto}>Clique Aqui</Text></TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  btn:{
    backgroundColor: '#5A198A',
    width: 190,
    height: 60,
    borderRadius: 9,
    alignItems: 'center',
    
  },
  texto:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold',
    marginTop: 15
  },

});
