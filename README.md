#Documentacion

dia:22/11/2025
Se instalo react + vite, no se pudo instalar tailwing por ende se decidio solo vite
se creo los componenetes de 
sidebar: barra lateral
Chatcontainer: el contenedor donde ira el chat
chatbox: es la imagen central, o el logo tipo de el chat
lightRays: es el fondo con luces y aja 


dia: 23/11/2025
Se separo los componentes con su CSS
se instalo AXios 

Se utilizo la pagina reactbits para el diseno
se instalo la dependecia OGL (lightRays.jsx)
Se esta haciendo de  la Api Hugging Face

dia: 24/11/2025
Creacion del Token para hacer pruebas 

Cambios en Chatcontainer: 
Notas
Cambios principales: Es asíncrono (async), importa Api.jsx, y maneja carga/errores para una mejor experiencia.





##########################Documentacion para el trabajo#########################################
¿Qué es Axios?
Definición: Axios es una librería (biblioteca) de JavaScript que facilita hacer solicitudes HTTP (como GET, POST, PUT, DELETE) a servidores o APIs externas. Básicamente, te permite "hablar" con otros servicios web desde tu aplicación React, por ejemplo, para enviar datos o recibir respuestas.

Por qué es útil: En lugar de usar el fetch nativo de JavaScript (que es más básico y requiere más código), Axios simplifica las cosas. Maneja automáticamente cosas como errores, conversiones de datos (ej. JSON), y es más fácil de usar en proyectos grandes.

Ejemplos de uso: Lo usas para conectar tu chatbot a una API externa, como una de IA (ej. OpenAI) para generar respuestas inteligentes, o para enviar datos a un servidor.

Ventajas de Axios sobre otras opciones:
Más fácil de usar: Menos código que fetch.
Manejo automático de errores: Detecta problemas de red o respuestas fallidas.
Soporte para interceptores: Puedes agregar lógica global (ej. autenticación) a todas las solicitudes.
Compatible con promesas: Funciona bien con async/await en React.

##########################################################################################
