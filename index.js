//import { obtenerUsuarios } from "./src/js/http-provider";
//obtenerUsuarios().then(console.log);

//import {init} from "./src/js/usuarios-page";

//init();

// IMPORTA TODO LO QUE HAY EN ESE ARCHIVO CON EL NOMBRE CRUD

/*import * as CRUD from "./src/js/crud-provider";

CRUD.getUsuario(4).then(console.log);
CRUD.crearUsuario({
    name:'Alejandro',
    job:'Desarrollador Web'

}).then(console.log); 
CRUD.actualizaUsuario(3,{
    name:'Alejandro',
    job:'Desarrollador Web'
}).then(console.log);
CRUD.borrarUsuario(2).then(console.log);
*/

import { init } from "./src/js/archivos-page";

init();