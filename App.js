import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";

const HomeStack = createStackNavigator();
const OtherStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) =>
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#FF6F69"
            },
            headerTintColor: "#fff"
        }}
    >
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: "Accueil",
                headerLeft: () =>
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        backgroundColor="#FF6F69"
                        onPress={() => navigation.openDrawer()}
                    />
            }}
        />
    </HomeStack.Navigator>;

const OtherStackScreen = ({ navigation }) =>
    <OtherStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#FF6F69"
            },
            headerTintColor: "#fff"
        }}
    >
        <OtherStack.Screen
            name="Other"
            component={OtherScreen}
            options={{
				title: "Autre",
				headerLeft: () =>
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        backgroundColor="#FF6F69"
                        onPress={() => navigation.openDrawer()}
                    />
			}}
        />
    </OtherStack.Navigator>;

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Other" component={OtherStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
