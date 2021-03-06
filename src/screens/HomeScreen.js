import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {  

  return ( 
  <View>    
    <Text style={styles.text}>HomeScreen for Harzan's App</Text>
    <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button 
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button 
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />
    <Button 
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button 
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />
    <Button 
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo"
    />
    <Button 
      onPress={() => navigation.navigate('SquareReducer')}
      title="Go to Square Demo (Reducer)"
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 40,
    marginHorizontal: 10
  }
});

export default HomeScreen;
