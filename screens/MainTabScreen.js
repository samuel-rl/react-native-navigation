import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";

import HomeScreen from "./drawer/HomeScreen";
import MessageScreen from "./bottom/MessagesScreen";
import AddScreen from "./bottom/AddScreen";

const HomeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>
    <Tab.Navigator
        initialRouteName="Home"
        //activeColor="#f0edf6"
        inactiveColor="#c9c9ff"
        shifting={true}
        labeled={false}
        barStyle={{ backgroundColor: "#fff" }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: "Home",
                //tabBarColor: '#009387',
                tabBarIcon: ({ color, focused }) =>
                    <IconFeather
                        name={focused ? "home" : "home"}
                        color={focused ? "#FF6F69" : color}
                        size={26}
                    />
            }}
        />
        <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
                tabBarLabel: "add",
                //tabBarColor: '#1f65ff',
                tabBarIcon: ({ color, focused }) =>
                    <IconFeather
                        name="plus-square"
                        color={focused ? "#e1f7d5" : color}
                        size={26}
                    />
            }}
        />
        <Tab.Screen
            name="Messages"
            component={MessageScreen}
            options={{
                tabBarLabel: "messages",
                //tabBarColor: '#694fad',
                tabBarIcon: ({ color, focused }) =>
                    <IconFeather
                        name="message-square"
                        color={focused ? "#f1cbff" : color}
                        size={26}
                    />
            }}
        />
    </Tab.Navigator>;

export default MainTabScreen;

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
