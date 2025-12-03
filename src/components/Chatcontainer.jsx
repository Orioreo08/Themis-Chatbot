import { useState } from 'react';
import './ChatContainer.css';

export default function ChatContainer() {
  
  // Estado para la lista de mensajes
  const [messages, setMessages] = useState([
    { sender: 'Themis', text: 'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?' }
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
      tag: "Saludo",
      keywords: [
        "hola", "saludos", "que tal", "buenos dias", "buenas tardes", "buenas noches"
      ],
      response: "¡Hola! Soy Themis, tu asistente virtual. Vamos a hacer que tu experiencia sea más fácil y emocionante.",
      file: null 
    },   
    {
      tag: "inscripcion",
      keywords: [
        "inscripcion","inscribo","inscribirme","inscribi","inscribirse",
        "como me inscribo","pasos de inscripcion","planilla de inscripcion"
      ],
      response: "Sigue los pasos para la inscripcion",
      file: null   
    },
    {
      tag: "beca",
      keywords: ["beca","becas","aplicar beca","solicitar beca","quiero beca"],
      response: "Para solicitar beca debes llenar el formulario en la sección de beneficios estudiantiles.",
      file: null
    },
    {
      tag: "constancia",
      keywords: ["constancia","constancia de estudio","solicitud constancia","pedir constancia"],
      response: "Debes ingresar al sistema de gestión estudiantil en línea o acudir a la oficina de control de estudios.",
      file: null
    },
    {
      tag: "derecho",
      keywords: ["derecho","carrera derecho","duracion derecho","estudiar derecho"],
      response: "La carrera de Derecho tiene una duración aproximada de 5 años, divididos en 10 semestres.",
      file: null
    },
    {
      tag: "requisitos",
      keywords: ["requisitos","requisitos ingreso","requisitos admision","ingreso universidad"],
      response: "Presentar el examen de admisión, cumplir con los requisitos académicos del bachillerato y entregar la documentación solicitada.",
      file: null
    },
     {
      tag: "Horario",
      keywords: [
        "horario", "hora", "horas", "agenda", "calendario", "cronograma"
      ],
      response: "Aquí tienes el horario de clase en formato jpg.",
      file: "/docs/hc.jpg"   // PDF guardado en carpeta public/docs
    },
    {
      tag: "despedida",
      keywords: [
      "adios","hasta luego","nos vemos","chau","chao","me voy","gracias",
      "muchas gracias","ok gracias","listo gracias","bye","goodbye","hasta pronto",
      "hasta mañana","hasta la próxima","cerrar chat","terminar conversacion"
      ],
      response: "¡Gracias por conversar conmigo! Te deseo mucho éxito en tu camino académico. 🌟"
    }, 
  ];

  // --- 🔎 Función para generar respuesta del bot ---
  const getBotResponse = (userMessage) => {
    const normalized = normalizeText(userMessage);

    for (let intent of intents) {
      for (let keyword of intent.keywords) {
        if (normalized.includes(keyword)) {
          return { text: intent.response, file: intent.file || null };
        }
      }
    }

    return { text: "Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?", file: null };
  };

  // --- 🔎 Manejo de envío de mensajes ---
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessages = [...messages, { sender: 'Tú', text: inputText }];
    setMessages(newMessages);

    setInputText('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      setMessages(prevMessages => [
        ...prevMessages, 
        { sender: 'Themis', text: botResponse.text, file: botResponse.file }
      ]);
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
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
            {msg.file && (
                <a 
                  href={msg.file} 
                  download   // 👈 fuerza la descarga automática
                  style={{ marginLeft: "10px", color: "#0078d4", fontWeight: "bold" }}
                  >
                   Descargar archivo
                </a>
                
              /*<a 
                href={msg.file} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: "10px", color: "#0078d4", fontWeight: "bold" }}
              >
                Descargar PDF
              </a>*/
            )}
          </p>
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
          Enviar
        </button>
      </div>
    </div>
  );
}
