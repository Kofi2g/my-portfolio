import "../css/App.css";
import Header from "./Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Technology from "./Technology";
import WorkExperience from "./WorkExperience";

function App() {
  return (
    <div className="App">
      <Header />
        <Introduction />
      <div className="InformationContainer">
        <Projects />
        <Technology />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
