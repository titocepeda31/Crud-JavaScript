const urlCrud = 'https://reqres.in/api/users';


// datos de api cloudinary
const cloudUrl = 'https://api.cloudinary.com/v1_1/titolabs/upload';
const cloudPreset = 'ml_default';


const getUsuario = async (id) =>{
    const resp = await fetch(`${urlCrud}/${id}`);
    const {data} = await resp.json();
    return data;
}

const crearUsuario = async (usuario) =>{

    const resp = await fetch(urlCrud,{
        method:'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
    });
  
    return await resp.json();

}


const actualizaUsuario = async (id,usuario) =>{
    
    const resp = await fetch(`${urlCrud}/${id}`,{
        method:'PUT',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
    });
  
    return await resp.json();

}


const borrarUsuario =  async (id) =>{

    const resp = await fetch(`${urlCrud}/${id}`,{
        method:'DELETE'
    });

    return (resp.ok) ?'borrado':'Error al borrar';

}


const subirImagen = async (archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);

    try{

        const resp = await fetch(cloudUrl,{
            method : 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        
        }else{
            throw await resp.json();
        }

    }catch(err){
        throw err;
    }

}


export{
    getUsuario,
    crearUsuario,
    actualizaUsuario,
    borrarUsuario,
    subirImagen
}