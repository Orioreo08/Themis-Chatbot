import Sidebar from './components/sidebar';
import ChatContainer from './components/Chatcontainer';
import ChatbotImage from './components/chatbox';

function App() {

  return (
    <div>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '20px' }}>
        <ChatbotImage />
        <ChatContainer />
      </main>
    </div>



  );
}

export default App
