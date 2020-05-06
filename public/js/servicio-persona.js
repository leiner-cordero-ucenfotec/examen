'use strict';

let registrar_persona = async (pdate, ptarea, puser_email, puser_id_type, puser_address) => {

    await axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/api/registrar-persona',
        responseType: 'json',
        data: {

            'date': pdate,
            'tarea': ptarea,
            'user_email': puser_email,
            'user_id_type': puser_id_type,
            'user_address': puser_address,

        }

    }).then((res) => {
        if (res.data.resultado == false) {
            switch (res.data.err.code) {
                case 11000:
                    Swal.fire({
                        title: 'No se pudo registrar la persona',
                        text: 'Ya existe una persona registrada con esa identificación',
                        icon: 'error'
                    });
                    break;
            }

        } else {

            Swal.fire({
                'title': 'Proceso realizado con éxito',
                'text': 'Sus datos se enviaron correctamente',
                'icon': 'success'
            }).then(() => {
                limpiar();
            });


        };

    }).catch((err) => {
        console.log(err);
    });


};