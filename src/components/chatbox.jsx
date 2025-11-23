export default function ChatbotImage() {
  return (
    <div style={styles.container}>
      <img
        src="/chatbot.png"
        alt="Chatbot"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
  },
  image: {
    width: '200px',
    borderRadius: '50%',
  },
};