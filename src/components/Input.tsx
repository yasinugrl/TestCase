import React from 'react';
import { View, TextInput, Text, TextStyle, StyleSheetProperties, ViewStyle, StyleSheet } from 'react-native';

interface InputProps {
    isErrorValid: boolean | any,
    value?: string,
    placeholder?: string,
    textInputStyle?: StyleSheetProperties,
    onChangeText?: () => string;
    secureTextEntry?: boolean,
    title?: string,
    containerStyle?: ViewStyle,
    titleStyle?: TextStyle,
    inputRef?: React.RefObject<HTMLInputElement>,
    mask?: boolean
    iconType?: string
    disable?: boolean
    isTransparent?: boolean,
    onFocus?: () => boolean
    numberOfLine: number
}

interface InputProps { }

const Input = (props: InputProps) => {

    let {
        placeholder, onChangeText, value, secureTextEntry,
        title, isErrorValid, containerStyle, textInputStyle, titleStyle,
        mask, isTransparent, onFocus, disable, numberOfLines
    } = props;


    return (
        <View style={[styles.inputContainer, containerStyle]}>
            <TextInput
                {...props}
                style={{ ...styles.textInput, }}
                ref={props.inputRef}
                autoCorrect={false}
                numberOfLines={numberOfLines}
                autoCapitalize="none"
                secureTextEntry={secureTextEntry}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                editable={disable}
                onFocus={onFocus}
            />
        </View>
    );
};

export { Input };

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 20,
        borderColor: 'gray',
        padding: 10,
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        alignSelf: 'center'
    }
});

