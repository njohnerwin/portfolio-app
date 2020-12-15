import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Main from "./main";

function App() {
  return (
    <div>
      <Header />
      <a id="1"></a>
      <div id="wrapper">
        <Main />
      </div>
      <div id="projects-nav">
        <h4>Projects</h4>
        <div id="projects-links">
          <a href="/raidbuilder#1"> {'>'} raidbuilder</a>
          <a href="/weather#1"> {'>'} weatherdashboard</a>
          <a href="/scheduler#1"> {'>'} scheduler</a>
          <a href="/password#1"> {'>'} pwgen</a>
          <a href="/burger#1"> {'>'} burgertime</a>
        </div>
        <p id="footer">Nicholas Erwin ©2020</p>
      </div>
    </div>
  );
}

export default App;
