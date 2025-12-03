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
Nota: Ni le pares porque no sirvio xd


 dia: 1/12/2025
 Se implemento una logica 
 Propósito
El componente ChatContainer implementa un chat sencillo entre el usuario y un bot llamado Themis. Permite:

Mostrar mensajes en pantalla.
Enviar mensajes desde un input.
Generar respuestas automáticas del bot según palabras clave.

Flujo de funcionamiento:

Estado inicial
messages: lista de mensajes que se muestran en el chat.
Arranca con un mensaje inicial del bot: "Hola, ¿en qué puedo ayudarte?".
inputText: texto que el usuario escribe en el campo de entrada.

Entrada del usuario
El usuario escribe en el input.
Puede enviar el mensaje presionando Enter o el botón de enviar.
Envío de mensaje
Se agrega el mensaje del usuario a la lista messages.
Se limpia el campo de entrada (inputText).

Respuesta del bot
Después de 1 segundo (simulación de delay), se ejecuta getBotResponse.

Esta función:
Normaliza el texto del usuario (lo pasa a minúsculas).
Busca coincidencias con palabras clave (hola, inscripcion, constancia, derecho, requisitos, etc.).
Devuelve una respuesta predefinida si encuentra coincidencia.
Si no encuentra nada, responde: "Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?".
El mensaje del bot se agrega a la lista messages.

Renderizado
Se muestran todos los mensajes en la ventana del chat.
Cada mensaje indica quién lo envió (Tú o Themis).
El input y el botón permiten seguir enviando mensajes.


Dicho a lo tierruo: 
El mensaje que envia el usuario, le quita las mayusculas, minusculas, los signos de inetrrogacion o exclamacion, es decir, lo convierte un frase simple. Posteriormente, la frase envia el usuario, lo convierte en un arreglo. Ejemplo:

usuario: Dame los pasos para inscribirme 
arreglo: {dame, los, pasos, para, inscribrime}

Este arreglo los va a recorrer el programa, si encuentra coindencias en el diccionario de frases( Archivo Chatcontainer.jsx linea 25 (Intenciones con variaciones)) Suelta la respuesta predefinida. 

De lo contrario, suelta un "Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?"