import React, { createContext, useState, useEffect } from 'react';
import authService from '../service/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usuarioContext = {
    logado: false,
    usuario: {},
    loading: false,
    login: () => new Promise(),
    logout: () => { }
}

const AuthContext = createContext(usuarioContext);

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Verifique se tem usuario e token no storage.;
        // se tiver usuario e token, vou setar o usuario e dizer que o loading é false.

        async function obterDadosDaStorage() {
            const usuarioStorage = await AsyncStorage.getItem("@ALala:user");
            const tokenStrorage = await AsyncStorage.getItem("@ALala:token");

            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (usuarioStorage && tokenStrorage) {
                setLoading(false);
                setUsuario(JSON.parse(usuarioStorage));
            }
        }

        obterDadosDaStorage();

    }, []);

    const salvarStorage = async (usuario, token) => {
        await AsyncStorage.setItem("@ALala:user", JSON.stringify(usuario));
        await AsyncStorage.setItem("@ALala:token", token);
    }
    const login = () => {
        setLoading(true);

        authService.login("exemplo@gmail.com", '123123')
            .then((response => {
                //Aqui tenho que registrar esse usuario de alguma FORMA
                setUsuario(response.usuario);

                // depois salvar esse usuario no Storage
                console.log(response.token)
                salvarStorage(response.usuario, response.token)

            }))
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false))
    }


    const logout = () => {
        AsyncStorage.clear()
            .then(() => {
                setUsuario({});
            });

    }


    return (
        <AuthContext.Provider value={{ logado: !!usuario.id, usuario, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;