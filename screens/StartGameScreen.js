import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnterNumber] = useState('')
    const { height } = useWindowDimensions()
    const numberInputHandler = (enterTex) => {
        setEnterNumber(enterTex)
    }
    const resetInputHandler = () => {
        setEnterNumber('');
    }
    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredNumber)
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number beteewn 1 and 99'), [
                { text: 'OK', style: 'destructive', onPress: resetInputHandler }
            ]
            return;
        }
        onPickNumber(chooseNumber);



    }
    const marginTopDistance = height < 380 ? 30 : 100;
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title >Cues My Number</Title>
                    <Card>
                        <InstructionText>Enter Number</InstructionText>
                        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}> Confirm</PrimaryButton>
                            </View>
                        </View>

                    </Card>

                </View>

            </KeyboardAvoidingView>
        </ScrollView>


    )
}

export default StartGameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        // marginTop: DeviceHeight<380?30:100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,

        fontWeight: "bold",
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})