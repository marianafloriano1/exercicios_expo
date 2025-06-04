import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Link href="/exercicio1">Exercício 01</Link>
    <Link href="/exercicio2">Exercício 02</Link>
    <Link href="/exercicio3">Exercício 03</Link>
    <Link href="/exercicio4">Exercício 04</Link>
    <Link href="/exercicio5">Exercício 05</Link>
    <Link href="/exercicio6">Exercício 06</Link>
    <Link href="/exercicio7">Exercício 07</Link>
    <Link href="/exercicio8">Exercício 08</Link>
    <Link href="/exercicio9">Exercício 09</Link>
    <Link href="/exercicio10">Exercício 10</Link>


    </View>
  );
}