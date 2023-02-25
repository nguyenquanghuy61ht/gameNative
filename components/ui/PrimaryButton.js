import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import React from 'react';


export default function PrimaryButton({ children,onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={{ color:Colors.primary600}} onPress={onPress}>

                <Text style={styles.buttonText}>{children}</Text>

            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor:Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'

    },
    buttonText: {
        color: 'white',
        textAlign: 'center'

    },
    pressed: {
        opacity: 0.75
    }
})
