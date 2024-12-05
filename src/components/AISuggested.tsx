import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AISuggestedImageContain from './AISuggestedImageContain';
import { ImageSourcePropType } from 'react-native';
import Manual from './Manual';

// Import your images
const InstantResult = require('../../assets/InstantResult.png');
const MultipleOptions = require('../../assets/MultipleOptions.png');
const EasyCustomize = require('../../assets/EasyCustomize.png');

const FullControl = require('../../assets/FullControl.png');
const customDetail = require('../../assets/CustomDetails.png');
const TaskLonger = require('../../assets/TakesLonger.png');

// Declare your data arrays
const AISuggestedList = [
    { img: InstantResult, text: 'Instant Result' },
    { img: MultipleOptions, text: 'Multiple Options' },
    { img: EasyCustomize, text: 'Easy Customize' },
];

const manualData = [
    { img: FullControl, text: 'Full Control' },
    { img: customDetail, text: 'Custom Details' },
    { img: TaskLonger, text: 'Takes Longer' },
];

const AISuggested = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containDiv}>
                <View style={styles.titleContain}>
                    <View>
                        <Text style={styles.title}>AISuggested</Text>
                        <Text>Get instant layout suggestions</Text>
                    </View>
                    <View style={styles.circle}></View>
                </View>
                <AISuggestedImageContain AISuggestedList={AISuggestedList} />
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Preview Sample</Text>
                </View>
            </View>

            <View style={styles.containDivTwo}>
                <View style={styles.titleContain}>
                    <View>
                        <Text style={styles.title}>Manual CAD Design</Text>
                        <Text>Create custom layout from scratch</Text>
                    </View>
                    <View style={styles.circleTwo}></View>
                </View>
                <Manual manualData={manualData} />
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Open CAD Editor</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 500,
        width: 350,
        marginTop: 15,
        shadowColor: '#000',
        marginLeft: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
        padding: 10,
        borderRadius: 10,
    },
    containDiv: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    containDivTwo: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
    },
    titleContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 5,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#CFCFCF',
        backgroundColor: '#E0E0E0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 5,
        marginBottom: 20,
    },
    circleTwo: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#CFCFCF',
        backgroundColor: '#F2F2F2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 5,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 17,
        marginBottom: 10,
    },
    button: {
        width: '80%',
        borderWidth: 1,
        marginLeft: 20,
        marginHorizontal: 'auto',
        borderColor: '#ccc',
        borderRadius: 5,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default AISuggested;
