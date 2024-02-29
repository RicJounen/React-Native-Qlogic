import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from "react-native";



import Home from "../pages/home";
import Login from "../pages/login";
import Turmas from "../pages/turmas";

const Drawer = createDrawerNavigator();

function Routes () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name=" " component={Login} options={{
                headerShown: false
            }}
            />
          
            <Drawer.Screen name="Home" component={Home} options={{
                headerTitle: () => (
                    <Image
                    source={require('../assets/logosenai.png')}
                    style={{width: 170, height: 45}}
                    />
                ),
                headerTitleAlign: 'center'
            }}
            />

            <Drawer.Screen name="Turmas" component={Turmas} options={{
                headerTitle: () => (
                    <Image
                    source={require('../assets/logosenai.png')}
                    style={{width: 170, height: 45}}
                    />
                ),
                headerTitleAlign: 'center'
            }}/>
         </Drawer.Navigator>
        
    )
}

export default Routes;