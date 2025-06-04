import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function exercicio5() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto_login}>Login</Text>
            <TextInput style={styles.email} placeholder='E-mail' keyboardType="email-address"></TextInput>
            <TextInput style={styles.senha} placeholder='Senha' secureTextEntry></TextInput>
            <Pressable style={styles.btn}><Text style={styles.textobtn}>Entrar</Text></Pressable>
            <Text style={styles.link}>Esqueci minha senha</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,

    },
    btn: {
        backgroundColor: '#839deb',
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 7,

    },
    textobtn: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 13
    },

    texto_login: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 30
    },

    email: {
        backgroundColor: 'white',
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 7,
        padding: 10

    },

    senha: {
        backgroundColor: 'white',
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 7,
        margin: 20,
        padding: 10
    },

    link: {
        color: '#577ae4',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 20
    },


});
