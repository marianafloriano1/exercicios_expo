import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type aba = {
    id: string;
    nome: string;
    icon: string;

};


const aba: aba[] = [
    {
        id: "1",
        nome: "Notificações",
        icon: "https://cdn-icons-png.flaticon.com/128/6824/6824079.png",

    },
    {
        id: "2", nome: "Privacidade",
        icon: "https://cdn-icons-png.flaticon.com/128/5818/5818566.png",

    },

    {
        id: "3", nome: "Segurança",
        icon: "https://cdn-icons-png.flaticon.com/128/2492/2492347.png",

    },

    {
        id: "4", nome: "Idioma",
        icon: "https://cdn-icons-png.flaticon.com/128/4821/4821611.png",

    },

    {
        id: "5", nome: "Tema",
        icon: "https://cdn-icons-png.flaticon.com/128/5311/5311069.png",

    },

    {
        id: "6", nome: "Conta",
        icon: "https://cdn-icons-png.flaticon.com/128/3106/3106773.png",

    },
];

export default function exercicio10() {
    return (
        <View style={styles.container}>
            <FlatList
                data={aba}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerbotoes}>
                        <Image source={{ uri: item.icon }} style={styles.icon} />
                        <Text style={styles.texto_icon}>{item.nome}</Text>
                    </TouchableOpacity>

                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ececec",
    },
    icon: {
        width: 50,
        height: 50
    },
    containerbotoes: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 7,
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10
    },
    texto_icon: {
        fontSize: 18,
        marginLeft: 15
    },
});