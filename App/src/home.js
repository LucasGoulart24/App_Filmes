import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icone from '@expo/vector-icons/Feather';

export default function Home() {
    // Função de navegação
    const navegacao = useNavigation();
    function login() {
        navegacao.navigate('Login');
    }
    return(
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text style={styles.titulo}>Lista de Filmes</Text>
                <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={login}>
                    <Icone name="user" size={25}/>
                    <Text style={{marginLeft: 10, fontSize: 15}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929'
    },
    menu: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#121212',
        padding: 10
    },
    titulo: {
        fontSize: 27,
        color: '#E03232'
    },
    botao: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E03232',
        borderRadius: 50
    }
});