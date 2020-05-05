import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";


const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Text style={{ color: colors.text }}>Home Screen !! </Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
