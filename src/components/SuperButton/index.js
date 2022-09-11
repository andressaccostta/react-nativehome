import React from "react";
import {TouchableHighlight, StyleSheet, View, Text, Alert} from "react-native";


const SuperButton = (props) => {
    return (
       <TouchableHighlight
        style={style.superButton}
        onPress={props.callback}
       >

        <View style={style.button}>
            <Text style={style.valor}>{props.valor}</Text>
            </View>

       </TouchableHighlight>
    );
}

    const style = StyleSheet.create({
        superButton: {

        },
        
        button: {
            alignItems: 'center',
            backgroundColor: "pink",
            padding: 12,
            width: 300,
            borderRadius: 15,
            marginTop: 12


        },


        valor: {
            fontSize: 15,
        }

    });

    export default SuperButton;