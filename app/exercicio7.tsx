import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AppItem = {
    id: string;
    nome: string;
    icon: keyof typeof Ionicons.glyphMap; // Essa linha corrige o erro
};


const apps = [
    { id: "1", nome: "Mensagens", icon: "chatbubble-outline" },
    { id: "2", nome: "Câmera", icon: "camera-outline" },
    { id: "3", nome: "Galeria", icon: "images-outline" },
    { id: "4", nome: "Música", icon: "musical-notes-outline" },
    { id: "5", nome: "Navegador", icon: "globe-outline" },
    { id: "6", nome: "Configurções", icon: "settings-outline" },
];

export default function exercicio7() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo  }>Meus aplicativos</Text>
            <FlatList
                data={apps}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerbotoes}>
                        <View style={styles.icone}>
                        <Ionicons name={item.icon} size={40} color='white'></Ionicons>
                        </View>
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
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    containerbotoes:{
        alignItems: 'center',
        margin: 23
    },
    icone:{
        backgroundColor: 'green',
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto_icon:{
        color: '#000',
        fontSize: 17
    },
    titulo:{
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});