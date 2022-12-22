import Message from "./components/message";

function App() {
  const messageText = 'Hello, world!';
  return (
    <div className="center">
      <h3>React ⚛️</h3>
      <header className="header">
        <h1>Messages</h1>
      </header>
      <main>
        <Message text={messageText} />
      </main>
    </div>
  );
}

export default App;
