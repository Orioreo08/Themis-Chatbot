export default function ChatContainer() {
  return (
    <div style={styles.container}>
      <div style={styles.messages}>
        <p><strong>Bot:</strong> Hola, ¿en qué puedo ayudarte?</p>
        <p><strong>Tú:</strong> Quiero saber sobre el proceso de inscripción.</p>
      </div>
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    marginLeft: '220px',
    padding: '20px',
  },
  messages: {
    height: '300px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
  },
};