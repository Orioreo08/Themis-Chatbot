/* Esto funciona aquí, cuidado con los comentarios */
import { useState } from 'react';  // Importa useState para manejar estado
import './ChatContainer.css';      // Importa el archivo CSS

export default function ChatContainer() {
  
  // Estado para la lista de mensajes (cada mensaje es un objeto con 'sender' y 'text')
  const [messages, setMessages] = useState([
    { sender: 'Themis', text: 'Hola, ¿en qué puedo ayudarte?' }  // Mensaje inicial
  ]);
  
  // Estado para el texto del input
  const [inputText, setInputText] = useState('');

  // Función para generar respuestas del chatbot (lógica simple)
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hola')) {
      return '¡Hola! ¿Cómo estás?';
    } else if (lowerMessage.includes('inscripcion')) {
      return 'El proceso de inscripción es simple: ve a la página web y sigue los pasos.';
    } else if (lowerMessage.includes('tengo una duda')) {
      return 'Claro, dime tu duda y con gusto te ayudo.';
    } else if (lowerMessage.includes('solicitud para una constancia de estudio')) {
      return 'Debes ingresar al sistema de gestión estudiantil en línea o acudir a la oficina de control de estudios.';
    } else if (lowerMessage.includes('duración de la carrera de derecho')) {
      return 'La carrera tiene una duración aproximada de 5 años, divididos en 10 semestres.';
    } else if (lowerMessage.includes('requisitos de ingreso')) {
      return 'Presentar el examen de admisión, cumplir con los requisitos académicos del bachillerato y entregar la documentación solicitada.';
    } else {
      return 'Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?';
    }
  };

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;  // No enviar si está vacío

    // Agrega el mensaje del usuario
    const newMessages = [...messages, { sender: 'Tú', text: inputText }];
    setMessages(newMessages);

    // Limpia el input
    setInputText('');

    // Genera y agrega la respuesta del bot después de un pequeño delay (para simular)
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages(prevMessages => [...prevMessages, { sender: 'Themis', text: botResponse }]);
    }, 1000);  // 1 segundo de delay
  };

  // Función para manejar Enter en el input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {/* Muestra los mensajes dinámicamente */}
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>

    <div className="input-container"> 
    <input
    type="text"
    placeholder="Escribe tu mensaje..."
    className="input"
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    onKeyPress={handleKeyPress}
    />

  {/* Botón con logo en lugar de texto */}
  <button className="send-button" onClick={handleSendMessage}>
    <img 
      src=""/* Ruta de tu logo o ícono */
      alt="Enviar" 
      className="send-logo"
    />
  </button>
</div>

    </div>
  );
}
