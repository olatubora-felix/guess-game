import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { PrimaryButton } from '../components/UI/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.InputContainer}>
            <TextInput style={styles.NumberInput} />
            <View>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    InputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4
    },
    NumberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        marginVertical: 16,
        color: "#ddb52f",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default StartGameScreen