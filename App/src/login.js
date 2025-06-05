import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[erroEmail, setErroEmail] = useState(false);
    const[erroSenha, setErroSenha] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20, color: '#FFF'}}>Faça seu cadastro</Text>
            <View style={{margin: 5}}>
                <Text style={styles.texto}>Email</Text>
                <TextInput style={styles.input} placeholder="digite seu email"/>
            </View>
            <View style={{margin: 5}}>
                <Text style={styles.texto}>Senha</Text>
                <TextInput style={styles.input} placeholder="digite seu email" keyboardType="numeric"/>
            </View>
            <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
                <Text style={{fontSize: 20, color: "#FFF"}}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#292929'
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    input: {
        width: 350,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FFF'
    },
    botao: {
        width: 350,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#E03232',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
});