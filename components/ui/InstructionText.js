import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import React from "react";
export default function InstructionText({children,style}) {
  return (
      <Text style={[styles.instructerText,style]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    instructerText: {
        fontFamily:'open-sans',
        fontSize: 25,
        color: Colors.accent500
    },
})