import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello this will be a Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Denise and is open-sourced in{" "}
            <a href="https://github.com/deniseglaus/Dictionary-project">
              gitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
