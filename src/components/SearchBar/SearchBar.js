import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './SearchBar.style'

const SearchBar = ({ placeholder, text, onChangeText, onEndText }) => {
    return (
        <View style={styles.body}>
            <TextInput
                value={text}
                onChangeText={onChangeText}
                onEndEditing={onEndText}
                placeholder={placeholder}
                style={styles.textinput}
                autoCorrect={false}
                autoCapitalize='none' />
        </View>
    )
}

export default SearchBar
