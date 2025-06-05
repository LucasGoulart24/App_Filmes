import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Login() {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[erroEmail, setErroEmail] = useState(false);
    const[erroSenha, setErroSenha] = useState(false);

    // Função de cadastro
    const cadastro = () => {
        let error = false;
        if(email !== 'teste@gmail.com') {
            setErroEmail(true);
            error = true
        }else {
            setErroEmail(false)
        }
        if(senha !== '1234') {
            setErroSenha(true);
            error = true
        }else {
            setErroSenha(false)
        }

        if(error) {
            alert('Email e Senha incorreto');
        }else {
            alert('Cadastro feito com sucesso!')
        }
    }
    return(
        <View style={styles.container}>
            <Image source={require('./Img/perfil.png')} style={styles.perfil}/>
            <Text style={{fontSize: 20, color: '#FFF'}}>Faça seu cadastro</Text>
            <View style={{margin: 5}}>
                <Text style={styles.texto}>Email</Text>
                <TextInput 
                    style={[styles.input, erroEmail && styles.erroBorda]} 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="digite seu email"
                />
            </View>
            <View style={{margin: 5}}>
                <Text style={styles.texto}>Senha</Text>
                <TextInput 
                    style={[styles.input, erroSenha && styles.erroBorda]}
                    value={senha}
                    onChangeText={setSenha} 
                    placeholder="digite seu email" 
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={cadastro}>
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
        borderColor: "#FFF",
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
    },
    erroBorda: {
        borderColor: 'red',
        borderWidth: 1
    },
    perfil: {
        width: 200,
        height: 200
    }
});