import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OtherScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Other Screen</Text>
      </View>
    );
};

export default OtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});