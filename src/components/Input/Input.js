import React from "react";
import {StyleSheet,SafeAreaView,TextInput, Text} from "react-native";

function MeuInput(props) {
    return (
    <SafeAreaView>
        <Text>
            {props.label}
        </Text>
        <TextInput style = {style.input} 
        placeholder={props.placeholder}
        >
        
        </TextInput>
    </SafeAreaView>
    )
}



const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 42,
        marginBottom: 15,
        padding: 12,
        width: 300,
        marginTop: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        color: 'pink'
        
    }
})

export default MeuInput;