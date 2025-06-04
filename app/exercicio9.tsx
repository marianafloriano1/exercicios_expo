import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type Post = {
    id: string;
    nome: string;
    perfil: string;
    post: string;
    description: string;
};


const posts: Post[] = [
    {
        id: "1", 
        nome: "julia da siva",
        perfil: "https://images.icon-icons.com/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png",
        post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sbp8BcF1l3e9i95hq0g4gSg_ckiMqTG-Gg&s",
        description: "amo a vida"
    },
    {
        id: "2", nome: "marina santos",
        perfil: "https://images.icon-icons.com/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
        post: "https://blog.hurb.com/wp-content/uploads/2019/09/Fjord_cruise_Naroyfjorden-_Foto_Sverre_Hjornevik_hurb.jpeg",
        description: "maravilha de final de semana"
    },

    {
        id: "3", nome: "renata gomes",
        perfil: "https://images.icon-icons.com/2643/PNG/512/female_woman_person_people_avatar_icon_159367.png",
        post: "https://images.memphistours.com/large/1384dab11b121931eba246f2ef0a42ec.jpg",
        description: "#praia"
    },

    {
        id: "4", nome: "paula oliveira",
        perfil: "https://images.icon-icons.com/2643/PNG/512/female_woman_people_person_avatar_black_tone_icon_159364.png",
        post: "https://kennydouglas.com.br/wp-content/uploads/2024/01/fotos-de-paisagens.webp",
        description: "por do sol mais lindo"
    },
];

export default function App() {
    const renderPost = ({ item }: { item: Post }) => (
        <View style={styles.posts}>

            <View style={styles.container_perfil}>
                <Image source={{ uri: item.perfil }} style={styles.perfil} />
                <Text style={styles.nome}>{item.nome}</Text>
            </View>

            <Image source={{ uri: item.post }} style={styles.post} />

            <Text style={styles.descricao}>{item.description}</Text>
        </View>
    );

    return (
        <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ececec",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    posts: {
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },

    container_perfil: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    perfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },

    nome: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },

    post: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },

    descricao: {
        fontSize: 14,
        color: "#555",
    },
});