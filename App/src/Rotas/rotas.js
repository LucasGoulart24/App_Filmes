import { createStackNavigator } from "@react-navigation/stack";
import Home from '../home';
import Login from '../login';

const Stack = createStackNavigator();

function Rotas() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{
                headerStyle: {
                    backgroundColor: '#121212'
                },
                headerTintColor: '#E03232'
            }}/>
        </Stack.Navigator>
    );
}

export default Rotas;