import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function exercicio8() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://cdn.vaidepromo.com.br/blog/2023/08/o-que-fazer-em-sorocaba-capa-scaled.jpg" }} style={styles.img} />

            <Image style={styles.img_perfil} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1487/1487291.png" }}></Image>

            <Text style={styles.texto_nome}>Marina Silva</Text>

            <Text style={styles.texto_descricao}>Desenvolvedora apaixonada por tecnologia e inovação. Sempre em busca de aprender mais!!</Text>

            <Text style={styles.texto_post}>Meus posts</Text>
            <Text style={styles.post}>5 Posts</Text>

            <Text style={styles.texto_seg}>Meus seguidores</Text>
            <Text style={styles.seg}>250 Seguidores</Text>

            <Text style={styles.texto_segui}>Seguindo</Text>
            <Text style={styles.segui}>180 Seguindo</Text>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    img: {
        width: '100%',
        height: 250,
        resizeMode: "cover",
    },

    img_perfil: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: 160,
        left: 20,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 70
    },

    texto_nome: {
        fontWeight: 'bold',
        fontSize: 20,
        top: 30,
        left: 20
    },

    texto_descricao: {
        fontSize: 18,
        textAlign: 'center',
        top: 50
    },

    texto_post:{
        fontWeight: 'bold',
        fontSize: 20,
        top: 70,
        left: 10
    },

    post:{
        fontSize: 18,
        top: 70,
        left: 10
    },

    texto_seg:{
        fontWeight: 'bold',
        fontSize: 20,
        top: 90,
        left: 10
    },

    seg:{
        fontSize: 18,
        top: 95,
        left: 10
    },

    texto_segui:{
        fontWeight: 'bold',
        fontSize: 20,
        top: 105,
        left: 10
    },

    segui:{
        fontSize: 18,
        top: 110,
        left: 10
    },


});
