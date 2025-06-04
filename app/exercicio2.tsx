import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function exercicio2() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.img} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1487/1487291.png" }}></Image>
                <Text style={styles.texto1}>Carlos Silva</Text>
                <Text style={styles.texto2}>Desenvolvedor Mobile | React Native</Text>

            </View>

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
    card: {
        backgroundColor: 'white',
        width: 300,
        height: 200,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 7,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto1: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
       
    },
    texto2: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center'
    },
    img:{
        width:90,
        height:90,
        

    },
});
