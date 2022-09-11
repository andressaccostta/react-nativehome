import React, {useState,useContext} from 'react';
import { Alert, StyleSheet, View, Image } from 'react-native';

import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input/Input';
import SuperButton from '../../components/SuperButton';
import AuthContext from '../../contexts/auth';

import LottieView from 'react-native-web-lottie';


 
export default function Login() {

const{login} = useContext(AuthContext);
  const handlerLogin = () => {
    login();
  }


  return (
    <View style={styles.container}>

    <LottieView
      autoPlay={true}
      style={{
          width: 100,
          height: 100,
          
      }}
      source={require("../../assets/mundo.json")}
      loop={true}
    />
   
    <Titulo Titulo = "Login"/>

      
            
       


      <MeuInput
      label="E-mail"
      placeholder="@exemplo.com"
      />

      <MeuInput
      label="Senha"
      placeholder="123456"

      />

      <SuperButton
      valor="Entrar"
      callback= {handlerLogin} >
      </SuperButton>
      

      <SuperButton
      valor="Esqueci minha senha"
      callback= {() => alert('Aqui chamar tela de recuperar a senha')} >
      </SuperButton>
   
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'arial',
    borderRadius: 15,
    
    
    
  },
});
