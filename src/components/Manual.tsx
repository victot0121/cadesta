import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

type ManualDataProps = {
    manualData: { img: any; text: string }[]; 
};

const Manual: React.FC<ManualDataProps> = ({ manualData }) => {
    return (
        <View style={styles.imageContainer}>
            {manualData.map((item, index) => (
                <View style={styles.imageWrapper} key={index}>
                    <Image source={item.img} style={styles.image} />
                    <Text style={styles.imageText}>{item.text}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    imageWrapper: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    imageText: {
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Manual;
