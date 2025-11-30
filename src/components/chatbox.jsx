import './Chatbox.css';  // Importa el archivo CSS

export default function Chatbox() {
  return (
    <div className="container">  {/* Cambia style por className */}
      <img
        src="/chatbot.png"
        alt="Chatbot"
        className="image"
      />
    </div>
  );
}