import api from "./api";


const usuario = {
    id: 1,
    nome: 'fulano',
    email: 'exemplo@gmail.com',
    perfil: {
        id: 1,
        descricao:'MANAGER'
    }
}

function login(email, senha){

    return new Promise(resolve =>{
        setTimeout(() => {
            resolve({
                token: 'hjghjfghfvcbcfddxskhbasddasdkhbhnvgghh',
                usuario    
        });

        },2000);
    })
}


function loginApi(email,senha){
    return new Promise((resolve, reject) => {
        return api.post('/usuario', { email, senha })
        .then(response => resolve(response))
        .catch(response => reject(response))

    })
}


export default {login, loginApi}