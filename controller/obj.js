function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



let objUsuario = [
    {
        id: generateUUID(),
        nombre: 'Usuario1',
        apellido: 'Apellido1',
        email: 'usuario1@gmail.com',
    },
    {
        id: generateUUID(),
        nombre: 'Usuario2',
        apellido: 'Apellido2',
        email: 'usuario2@gmail.com',
    },
    {
        id: generateUUID(),
        nombre: 'Usuario3',
        apellido: 'Apellido3',
        email: 'usuario3@gmail.com',
    },
    {
        id: generateUUID(),
        nombre: 'Usuario4',
        apellido: 'Apellido4',
        email: 'usuario4@gmail.com',
    },
    {
        id: generateUUID(),
        nombre: 'Usuario5',
        apellido: 'Apellido5',
        email: 'usuario5@gmail.com',
    }

]