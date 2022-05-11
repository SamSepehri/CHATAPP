import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';


export default function Chat(props) {

    // Retrieving the name and color properties passed from the Start Screen
    let { name, color } = props.route.params;
    useEffect(() => {

        // Set the screen title to the user name entered in the start screen
        props.navigation.setOptions({ title: name });
    }
    )

    return (
        // Setting the background color to the color picked by the user in the start screen
        <View style={[{ backgroundColor: color }, styles.container]}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})