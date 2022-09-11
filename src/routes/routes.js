import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import {View, ActivityIndicator} from 'react-native';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';


const Routes = () => {
    
    const {logado , loading} = useContext(AuthContext);
    
    if(loading){
        return (
            <View style={{flex:1,  justifyContent: 'center', alignItems:'center'}}>
                <ActivityIndicator size="large" color="pink" />
            </View>
        );
        
    }else{
        return (logado) ? <AppRoutes></AppRoutes> : <AuthRoutes></AuthRoutes>
    }

   
    
    

    //Aqui precisa saber o estado do usuário se está logado ou não
    //const{logado, loading} = useContext(AuthContext);

     // se estiver logado, vou carregar o AppRoutes, senão AuthRoutes.

 
}


export default Routes;

     

    //console.log(logado)

   


  


