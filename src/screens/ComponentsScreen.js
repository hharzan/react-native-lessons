import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const gettingStartedText = "Getting started with React Native!";
    const nameText = "Harzan";  
return (
    <View>
<Text style={styles.textStyle1}>{gettingStartedText}</Text>
<Text style={styles.textStyle2}>My name is {nameText}!</Text>
</View>

        );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;