/**ínicio da config 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * 
 */



/**
 * const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// final da config
 */



//importação das páginas
/**
 * import Home from './src/pages/Home';
import Details from './src/pages/Details';
//fim
 */



//criando componente de Tabs
/**
 * 
 
function Tabs() {
    return (

        <Tab.Navigator>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    headerStyle: {
                        backgroundColor: '#4682b4',
                    }

                }}
            >
            </Stack.Screen>


            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: "Sobre",
                    headerStyle: {
                        backgroundColor: 'pink',
                    }

                }}
            >
            </Stack.Screen>

        </Tab.Navigator>
    )
}* 
 * 


 * export default function Router() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName >

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: '#4682b4',
                        }

                    }}
                >
                </Stack.Screen>


                <Stack.Screen
                    name="Details"
                    component={Tabs}
                    options={{
                        title: "Sobre",
                        headerStyle: {
                            backgroundColor: 'pink',
                        }

                    }}
                >
                </Stack.Screen>

            </Stack.Navigator>


        </NavigationContainer>


    )
}
 */

//criando componentes que terá toda a rota do app
