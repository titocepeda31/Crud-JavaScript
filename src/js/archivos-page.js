import { subirImagen } from "./crud-provider";

const body = document.body;
let inputFile , imgFoto;

const crearInputFile = () =>{

    const html = `
        <h1>SUBIR IMAGEN</h1>
        <hr>
        <label>Selecciona una IMAGEN</label>
        <input type = "file" name="" id="" accept="image/jpg,image/png">
        <br>
        <img id="img-upload" class ="img-thumbnail" src="">
    `;


    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);
    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#img-upload');

}


const eventos = () =>{

    inputFile.addEventListener('change',(event) =>{
        //console.log(event);
        const file = event.target.files[0];
        subirImagen(file).then ( url => imgFoto.src = url);
        
    });


}



export const init = () =>{

    crearInputFile();
    eventos();

}