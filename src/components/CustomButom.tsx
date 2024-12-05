import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButom = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Custom Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20, 
  },
  button: {
    width: '80%',
    backgroundColor: '#8BAA9E', 
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center', 
    justifyContent: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#fff', 
    textAlign: 'center',
  },
});

export default CustomButom;
