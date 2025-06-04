import { StyleSheet, View, Text } from "react-native";

export default function Login() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 15, color: '#FFF'}}>Faça seu cadastro</Text>
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
    }
});