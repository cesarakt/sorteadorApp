import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        marginVertical: 30,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    boxNumero: {
        backgroundColor: "#0DAEBF",
        margin: 30,
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    numeros:{
        color: "#fff",
        fontWeight: "700",
        fontSize: 60
    },
    boxButton: {
        width: 200
    },
    boxTextInput: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 10
    },
    inputFocus: {
        borderWidth: 1,
        borderColor: '#1f4f66',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10

    },
})

export default styles;