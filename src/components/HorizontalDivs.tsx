import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalDivs: React.FC = () => {
  const divs = new Array(7).fill(null);

  return (
    <View style={styles.container}>
      {divs.map((_, index) => (
        <View
          key={index}
          style={[
            styles.div,
            { backgroundColor: index === 6 ? '#F0A500' : '#34C759' },
          ]}
        />
      ))}
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10,
  },
  div: {
    width: 40, 
    height: 10,
    borderRadius: 5, 
  },
});

export default HorizontalDivs;
