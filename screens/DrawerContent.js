import React from "react";
import { View, StyleSheet } from "react-native";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from "react-native-paper";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import IconFeather from "react-native-vector-icons/Feather";
import { ThemeProvider } from "@react-navigation/native";

export function DrawerContent(props) {
    const paperTheme = useTheme();

    const toggleNotification = () => {
        alert("Pas encore implémenté");
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Avatar.Image
                            source={{
                                uri:
                                    "https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png"
                            }}
                            size={200}
                        />
                    </View>

                    <Drawer.Section style={styles.drawerContent}>
                        <DrawerItem
                            icon={({ color, size }) =>
                                <IconFeather
                                    name="home"
                                    color={color}
                                    size={size}
                                />}
                            label="Accueil"
                            onPress={() => {
                                props.navigation.navigate("HomeDrawer");
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) =>
                                <IconFeather
                                    name="settings"
                                    color={color}
                                    size={size}
                                />}
                            label="Paramètres"
                            onPress={() => {
                                props.navigation.navigate("SettingsScreen");
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Préférences">
                        <TouchableRipple onPress={props.toggleTheme}>
                            <View style={styles.preferences}>
                                <Text>Thème sombre</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple
                            onPress={() => {
                                toggleNotification();
                            }}
                        >
                            <View style={styles.preferences}>
                                <Text>Notifications</Text>
                                <View pointerEvents="none">
                                    <Switch value={false} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <View style={StyleSheet.logoutSection}>
                    <DrawerItem
                        icon={({ color, size }) =>
                            <IconFeather
                                name="log-out"
                                color={color}
                                size={size}
                            />}
                        label="Déconnexion"
                    />
                </View>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    userInfoSection: {
        alignItems: "center"
    },
    preferences: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 20
    }
});
