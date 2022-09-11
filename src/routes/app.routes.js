// toda rota que PRECISA de autenticação vamos colocar aqui dentro
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';



const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


import Home from "../pages/Home";
import Details from "../pages/Details";
import Notifications from '../pages/Notifications';

import {Feather} from 'react-native-vector-icons'

export default function AppRoutes() {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}
              options={{
                tabBarIcon: () => {
                    return<Feather name='home' size={25} color='pink'/>
                },
                tabBarBadge: 1
              }}
              />

            <Tab.Screen name="Details" component={Details}  options={{
                tabBarIcon: () => {
                    return<Feather name='box' size={25} color='pink'/>
                }
            }}
            />

             <Tab.Screen name="Notifications" component={Notifications}
              options={{
                tabBarIcon: () => {
                    return<Feather name='bell' size={25} color='pink'/>
                },

                tabBarBadge: 1


              }}
              />
            
        </Tab.Navigator>
    );
}