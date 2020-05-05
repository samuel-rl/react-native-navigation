import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from "@react-navigation/native";

const MessagesScreen = () => {
  const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <Text style={{ color: colors.text }}>Messages Screen</Text>
      </View>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});