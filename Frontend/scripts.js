
document.addEventListener('DOMContentLoaded', function () {

fetch('http://localhost:3000/usuarios')
.then(response => response.json())  // Convertir la respuesta en JSON
.then(data => {
    // Obtener el contenedor <tbody> de la tabla
    const tbody = document.getElementById('usuarios-tabla');
    
    // Iterar sobre los datos de los usuarios y agregar filas a la tabla
    data.forEach(usuario => {
        const tr = document.createElement('tr');  // Crear una nueva fila
        tr.innerHTML = `
            <td>${usuario.id_empleado}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.salario}</td>
            <td>${usuario.id_departamento}</td>
        `;
        tbody.appendChild(tr);  // Agregar la fila a la tabla
    });
})
.catch(error => {
    console.error('Error al obtener los usuarios:', error);
});
});