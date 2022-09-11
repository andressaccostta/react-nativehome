import React, {useContext} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import AuthContext from '../../contexts/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Home ({}){
        
    return ( 
        <View style={styles.container}>

            <Text style={styles.text}>Quem está assistindo?</Text> 
           <Image source={require('../../assets/net.jpg')} 
            style={styles.image}
            
           />  
           
           <Image source={require('../../assets/ttse.jpg')}
           style={styles.image}
          />

        <Image source={require('../../assets/lii.jpg')}
           style={styles.image}
          />

        <Image source={require('../../assets/ooooo.png')}
           style={styles.image}
          />
          
        <Icon name="facebook" color="blue" size={20}>
            Entrar com facebook
        </Icon>

       

        <Icon name="twitter" color="blue" size={20}>
            Entrar com o Twitter
        </Icon>
                      
        <Icon name="heart" color="red" size={20}>
                Netflix
        </Icon>    

        <Text style={styles.text}>Em breve mais informações</Text> 
        </View> 
    );       
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'stretch',
        alignItem: 'center',
        backgroundColor: 'white'
    } ,
    text : {
        fontSize: 40,
        textAlign: 'center',
        color: 'pink'
    } ,
   
    image: {
        height: 100,
        width: 100
      
        
        
        
    }

   
    
})


export default Home