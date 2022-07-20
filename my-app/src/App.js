import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <header className="App-header">
          <h1>Hello this will be a Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Denise</small>
        </footer>
      </div>
    </div>
  );
}
