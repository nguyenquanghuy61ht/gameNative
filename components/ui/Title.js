import { StyleSheet, Text } from "react-native";
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
        borderWidth: 2,
        color: 'white',
        fontSize: 18,
      //  fontWeight: 'bold',
        padding: 12,
        textAlign: 'center',

    }
});
