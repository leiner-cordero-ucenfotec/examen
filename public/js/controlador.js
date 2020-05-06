'use strict';

const tName = document.querySelector('#date');
const nTarea = document.querySelector('#tarea');
const uAddress = document.querySelector('#user_address');
const uEmail = document.querySelector('#user_email');
const uIdtype = document.querySelector('#user_id_type');


const btnRegistrar = document.querySelector('#btnRegistrar');
const btnCancelar = document.querySelector('#btnCancelar');


let validar = () => {

    let inputs_requeridos = document.querySelectorAll('#frmRegistro [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {

        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('inputError');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('inputError');


        }
    }
    return error;
};

let limpiar = () => {
    date.value = "";
    tarea.value = "";
    user_email.value = "";
    user_id_type.value = "";
    user_address.value = "";
};

let obtenerDatos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor verificar campos resaltados',
            'icon': 'warning'
        });
    } else {

        let date = tName.value;
        let tarea = nTarea.value;
        let user_email = uEmail.value;
        let user_id_type = uIdtype.value;
        let user_address = uAddress.value;

        registrar_persona(date, tarea, user_email, user_id_type, user_address);
    }

};

btnRegistrar.addEventListener('click', obtenerDatos);
btnCancelar.addEventListener('click', limpiar);

