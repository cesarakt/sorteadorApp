import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";


export default function Titulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Sorteio DevMedia</Text>

            <Text style={styles.subTitulo}>Hora de ver quem é o vencedor</Text>
        </View>
    )
}