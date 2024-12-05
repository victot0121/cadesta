import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

interface ActiveProjectItem {
  img: ImageSourcePropType;
  text: string;
  score: number;
}

interface ActiveProjectsProps {
  ActiveProjectsList: ActiveProjectItem[];
}

const ActiveProjects: React.FC<ActiveProjectsProps> = ({ ActiveProjectsList }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ActiveProjectsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.details}>
              <Text style={styles.text}>{item.text}</Text>
              <Image source={item.img} style={styles.image} />
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>{item.score}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  row: {
    justifyContent: 'space-between',
  },
  details: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  score: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginRight: 70,
  },
});

export default ActiveProjects;
