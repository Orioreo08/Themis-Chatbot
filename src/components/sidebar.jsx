export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.title}>Menú</h2>
      <ul style={styles.list}>
        <li>Inicio</li>
        <li>Chatbot</li>
        <li>Configuración</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '2rem',
  },
};
