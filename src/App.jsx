import Sidebar from './components/Sidebar';   // Tu navbar (sidebar)
import ChatContainer from './components/ChatContainer';
import Chatbox from './components/chatbox';
import './App.css';

function App() {
  return (
    
    <div className="app-container">
      {/* Navbar fijo arriba */}

      <Sidebar />

      {/* Fondo con imagen y efecto LightRays */}
      <div className="background-layer">
        
      {/* <LightRays /> */}
        
      </div>

      {/* Contenido principal */}
      <main className="main-content">
        {/* <Chatbox /> */}
        <h2>Hola, en que te puedo ayudar!</h2>
        <ChatContainer />
      </main>
    </div>
  );
}

export default App;








/*import Sidebar from './components/sidebar';
import ChatContainer from './components/Chatcontainer';
import ChatbotImage from './components/chatbox';
import LightRays from './components/LightRays';

function App() {

  return (
      
    <div>
      <LightRays />
      <Sidebar />

      <main className="main-content">
        <ChatbotImage />
        <ChatContainer />
      </main>

    </div>



  );
}

export default App
*/