import { useState } from 'react';  
import './ChatContainer.css';      

export default function ChatContainer() {
  
  // Estado para la lista de mensajes
  const [messages, setMessages] = useState([
    { sender: 'Themis', text: 'Hola, ¿en qué puedo ayudarte?' }
  ]);
  
  // Estado para el texto del input
  const [inputText, setInputText] = useState('');

  // --- 🔎 Normalización del texto ---
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")                
      .replace(/[\u0300-\u036f]/g, "") 
      .replace(/[^\w\s]/gi, "")        
      .trim();
  };

  // --- 🔎 Intenciones con variaciones ---
  const intents = [
    {
      tag: "inscripcion",
      keywords: ["inscripcion","inscribo","inscribirme","inscribi","inscribirse","como me inscribo","pasos de inscripcion"],
      response: "Los pasos de inscripción son: 1) Completar formulario, 2) Pagar arancel, 3) Confirmar en secretaría."
    },
    {
      tag: "beca",
      keywords: ["beca","becas","aplicar beca","solicitar beca","quiero beca"],
      response: "Para solicitar beca debes llenar el formulario en la sección de beneficios estudiantiles."
    },
    {
      tag: "constancia",
      keywords: ["constancia","constancia de estudio","solicitud constancia","pedir constancia"],
      response: "Debes ingresar al sistema de gestión estudiantil en línea o acudir a la oficina de control de estudios."
    },
    {
      tag: "derecho",
      keywords: ["derecho","carrera derecho","duracion derecho","estudiar derecho"],
      response: "La carrera de Derecho tiene una duración aproximada de 5 años, divididos en 10 semestres."
    },
    {
      tag: "requisitos",
      keywords: ["requisitos","requisitos ingreso","requisitos admision","ingreso universidad"],
      response: "Presentar el examen de admisión, cumplir con los requisitos académicos del bachillerato y entregar la documentación solicitada."
    }
  ];

  // --- 🔎 Función para generar respuesta del bot ---
  const getBotResponse = (userMessage) => {
    const normalized = normalizeText(userMessage);

    for (let intent of intents) {
      for (let keyword of intent.keywords) {
        if (normalized.includes(keyword)) {
          return intent.response;
        }
      }
    }

    return "Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?";
  };

  // --- 🔎 Manejo de envío de mensajes ---
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessages = [...messages, { sender: 'Tú', text: inputText }];
    setMessages(newMessages);

    setInputText('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages(prevMessages => [...prevMessages, { sender: 'Themis', text: botResponse }]);
    }, 1000);
  };

  // --- 🔎 Manejo de Enter ---
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
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

        <button className="send-button" onClick={handleSendMessage}>
          <img 
            src="" /* Ruta de tu logo o ícono */
            alt="Enviar" 
            className="send-logo"
          />
        </button>
      </div>
    </div>
  );
}
