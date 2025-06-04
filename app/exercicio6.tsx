import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function exercicio6() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>Explorando o universo</Text>
                <View style={styles.bloco}>
                    <Text style={styles.texto}>O universo é vasto e misterioso, repleto de galáxias, estrelas e planetas ainda desconhecidos.</Text>
                    <Image source={{ uri: "https://placehold.co/300" }} style={styles.img} />
                </View>

                <View style={styles.bloco}>
                    <Text style={styles.texto}>Cientistas estudam o espaço há séculos, utilizando telescópios e sondas espaciais.</Text>
                    <Image source={{ uri: "https://placehold.co/300" }} style={styles.img} />

                </View>

                <View style={styles.bloco}>
                    <Text style={styles.texto}>A exploração espacial tem revelado segredos incríveis sobre a origem do universo.</Text>
                    <Image source={{ uri: "https://placehold.co/300" }} style={styles.img} />

                </View>

                <View style={styles.bloco}>
                    <Text style={styles.texto}>O futuro pode nos levar para Marte e além, com novas tecnologias e descobertas.</Text>
                    <Image source={{ uri: "https://placehold.co/300" }} style={styles.img} />

                </View>
            </ScrollView>


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

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    bloco: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        borderRadius: 8,
        alignItems: 'center',
        padding: 20,
        margin: 10
    },
    texto: {
        fontSize: 18,
        color: 'grey',
        marginBottom: 10
    },
    img: {
        width: 350,
        height: 200,
        borderRadius: 8
    },


});
