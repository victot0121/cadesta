import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import infoCircle from '../../assets/infocircle.png'

const Quickresults = () => {
    return (

        <View style={style.container}>
            <View>
                <Image source={infoCircle} />
            </View>
            <View>
                <View style={style.divOne}>
                    <Text>
                        AI-Suggested Layouts: Quick results based on
                        your preferences, but may need adjustments.

                    </Text>
                    <Text>
                        Manual CAD Design: Complete control over
                        every detail, but requires more time and effort.
                    </Text>
                </View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        gap: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:"#F3F7F5",
    },
    divOne:{
        width: 300,
    }
})

export default Quickresults