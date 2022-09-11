import React from "react";
import {Text, StyleSheet} from "react-native-web";


function Titulo (props) {
    return (
        <Text style={css.Titulo}>{props.Titulo}</Text>
    )
}



const css = StyleSheet.create({
        Titulo: {
            color: 'pink',
            fontSize: 40,
        }
});


export default Titulo;