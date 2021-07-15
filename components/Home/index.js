import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles"

export default function Home() {
    const [flagInputFocus, setFlagInputFocus] = useState("");

    const [valorMinimo, setValorMinimo] = useState(0);
    const [valorMaximo, setValorMaximo] = useState(10);

    const [numeroSorteado, setNumeroSorteado] = useState(0);

    const validarCampos = (minimo, maximo) => {
        //Valida se os campos foram preenchidos com numeros sem ter nenhum campo vazio
        if (isNaN(minimo) || isNaN(maximo)) {
            alert('Digite os valores');
            return false;
        }
        //Valida se o valor minimo é menor que o maximo
        if (minimo > maximo) {
            alert('O valor mínimo deve ser menor que o valor máximo');
            return false;
        }
        return true;
    }

    const gerarNumero = () => {
        //Armazena os valores digitados e converte para numero
        const min = parseInt(valorMinimo);
        const max = parseInt(valorMaximo);
        
        //se o valor de validarCampos for false , para a execução da função gerarNumero
        if (!validarCampos(min, max)) {
            return;
        }
        
        // Gera um numero aleatório com base nos valores min e max inseridos pelo usuário
        // Tendo como função - Math.floor(Math.random() * length + offset) onde Math.floor(Math.random() * (max + 1 - min) + min)

        const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
        setNumeroSorteado(novoNumero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Toque no botão e veja quem é o vencedor entre o valor mínimo e máximo.</Text>

            <View style={styles.boxTextInput}>
                <Text>Valor Máximo: </Text>

                <TextInput
                    /*
                    autoFocus - Foca automaticamente no textInput ao carregar a pagina
                    maxLength - Quantidade de caracteres
                    value - valor atribuido ao textInput , sendo uma variável de estado
                    onChangeText - altera o valor da variavel de estado valorMinimo atraves do evento onChangeText
                    onFocus e onBlur - eventos de focar e desfocar de um textInput
                    */
                    style={flagInputFocus === "txt_min" ? styles.inputFocus : styles.textInput}
                    onFocus={() => setFlagInputFocus("txt_min")}
                    onBlur={() => setFlagInputFocus("")}
                    textAlign="center"
                    keyboardType="phone-pad"
                    maxLength={5}
                    autoFocus={true}
                    value={valorMinimo.toString()}
                    onChangeText={valor => setValorMinimo(valor)}
                />
            </View>

            <View style={styles.boxTextInput}>
                <Text>Valor Mínimo: </Text>

                <TextInput
                    style={flagInputFocus === "txt_max" ? styles.inputFocus : styles.textInput}
                    onFocus={() => setFlagInputFocus("txt_max")}
                    onBlur={() => setFlagInputFocus("")}
                    textAlign="center"
                    keyboardType="phone-pad"
                    maxLength={5}
                    autoFocus={true}
                    value={valorMaximo.toString()}
                    onChangeText={valor => setValorMaximo(valor)}
                />
            </View>

            <View style={styles.boxButton}>
                <Button title="Sortear" color="#18505F" borderRadius="10" touchSoundDisabled={true} onPress={gerarNumero} />
            </View>

            <View style={styles.boxNumero}>
                <Text style={styles.numeros}>{numeroSorteado}</Text>
            </View>


        </View>
    )
}

