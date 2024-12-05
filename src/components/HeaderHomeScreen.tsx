import { View, Text, SafeAreaView, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

interface HeaderProps {
    title: string;
    imageSource: ImageSourcePropType;
    person: string;
    alertImage: ImageSourcePropType;
}

const HeaderHomeScreen: React.FC<HeaderProps> = ({ title, imageSource, person, alertImage }) => {
    return (
        <SafeAreaView>
            <View style={style.container}>
                <View style={style.detailContainer}>
                    <Image source={imageSource} style={style.image} />
                    <View style={style.contain}>
                        <Text style={style.title}>{title}</Text>
                        <Text style={style.person}>{person}</Text>
                    </View>
                </View>
                <View>
                    <Image source={alertImage} style={style.alertImage} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    detailContainer: {
        flexDirection: "row",
    },
    contain: {
        marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    person: {
        fontSize: 12,
        color: '#555',
    },
    alertImage: {
        width: 25,
        height: 25,
    },
});

export default HeaderHomeScreen;
