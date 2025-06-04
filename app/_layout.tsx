import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Home",
      }} />
      <Stack.Screen name="exercicio1" options={{
        title: "Exercício 01",
      }} />
      <Stack.Screen name="exercicio2" options={{
        title: "Exercício 02",
      }} />
     <Stack.Screen name="exercicio3" options={{
        title: "Exercício 03",
      }} />
       <Stack.Screen name="exercicio4" options={{
        title: "Exercício 04",
      }} />

    </Stack>
    


  );
}