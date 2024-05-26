// script.js
document.getElementById('solicitud-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    
    const mensaje = `Solicitud enviada por ${nombre} (${email}) para el ${fecha} a las ${hora}.`;
    
    document.getElementById('mensaje').textContent = mensaje;
});
