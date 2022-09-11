import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

function Details ({navigation}){
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Detalhes</Text>
            
         
        </View> 
    )       
}
const styles = StyleSheet.create({
    container: {
        flex:1
    } ,
    text : {
        fontSize: 40,
        textAlign: 'center',
        color: 'pink'
    } ,
   
    
})


export default Details;