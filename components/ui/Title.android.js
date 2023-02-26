import { StyleSheet, Text,Platform } from "react-native";
import React from 'react';

export default function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily:'open-sans-bold',
        borderColor: "white",
        // borderWidth: Platform.OS === 'android'?2:0, cach 1
       // borderWidth:Platform.select({ios:0,android:2}),
       borderWidth:2, 
       color: 'white',
        fontSize: 18,
      //  fontWeight: 'bold',
        padding: 12,
        textAlign: 'center',
        maxWidth:'80%',
        width:300

    }
});
