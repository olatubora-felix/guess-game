import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { PrimaryButton } from '../components/UI/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.InputContainer}>
            <TextInput placeholder='Add text' />
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
    }
});

export default StartGameScreen