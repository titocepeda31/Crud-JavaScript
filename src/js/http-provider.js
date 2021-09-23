const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerUsuarios = async () =>{

        const resp = await fetch (urlUsuarios);
        // des estructuracion objeto {}
        const {data:usuarios} = await resp.json();
        
        return usuarios;

}

export{
    obtenerUsuarios
}