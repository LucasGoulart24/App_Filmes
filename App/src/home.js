import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
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
                    <Icone name="user" size={35}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.filmes}>
                <View style={styles.card}>
                    <Image source={require('./Img/filme1.jpg')} style={{width: '100%', height: 450}}/>
                    <Text style={styles.subtitulo}>Mundo Jurássico: Domínio</Text>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{color: '#FFF', fontSize: 17}}>Ação/Ficção científica</Text>
                        <Text style={{color: '#FFF', fontSize: 17}}>2022</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5}}>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                    </View>
                    <TouchableOpacity style={styles.botaoAssistir} activeOpacity={0.7}>
                        <Text style={{color: '#FFF', fontSize: 20}}>Assistir</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Image source={require('./Img/filme2.jpg')} style={{width: '100%', height: 450}}/>
                    <Text style={styles.subtitulo}>Um Filme Minecraft</Text>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{color: '#FFF', fontSize: 17}}>Comédia/Aventura</Text>
                        <Text style={{color: '#FFF', fontSize: 17}}>2025</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5}}>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                    </View>
                    <TouchableOpacity style={styles.botaoAssistir} activeOpacity={0.7}>
                        <Text style={{color: '#FFF', fontSize: 20}}>Assistir</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Image source={require('./Img/filme3.jpg')} style={{width: '100%', height: 450}}/>
                    <Text style={styles.subtitulo}>Avatar: O Caminho Da Água</Text>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={{color: '#FFF', fontSize: 17}}>Ficção científica/Ação</Text>
                        <Text style={{color: '#FFF', fontSize: 17}}>2022</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5}}>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                        <Icone name="star" size={20} color={'yellow'}/>
                    </View>
                    <TouchableOpacity style={styles.botaoAssistir} activeOpacity={0.7}>
                        <Text style={{color: '#FFF', fontSize: 20}}>Assistir</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E03232',
        borderRadius: 50
    },
    filmes: {
        flex: 1,
        margin: 10,
    },
    card: {
        padding: 5,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#000',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 20,
        color: '#FFF',
        margin: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    botaoAssistir: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#E03232',
        alignItems: 'center',
        justifyContent: 'center'
    }
});